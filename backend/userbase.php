<?php

class Connect extends PDO{
    public function __construct(){
        parent::__construct("mysql:host=localhost;dbname=db6madmwhxsmg0", 'ug98aliywitj2', 'JumboSpace123.',
        array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

        // Using XAMMP doesn't allow localhost to be outside of XAMMP itself for some reason
        // parent::__construct("mysql:host=localhost;dbname=jumbospace", 'root', '',
		// array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        // $this->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    }
}

class Controller {
    function getUserById($id) {
        $db = new Connect();
        $query = $db->prepare("SELECT * FROM users WHERE id = :id");
        $query->execute(['id' => intval($id)]);
        return $query->fetch(PDO::FETCH_ASSOC) ?: null; // Return user data or null if not found
    }
    
   function getLikedProperties($userId) {
    $db = new Connect();
    $query = $db->prepare("
        SELECT 
            p.id AS property_id,
            p.title,
            p.address,
            p.type,
            p.price,
            p.imageUrl,
            p.datePosted,
            p.distance
        FROM likedProp lp
        INNER JOIN mytable p ON lp.property_id = p.id
        WHERE lp.user_id = :user_id
    ");
    $query->bindValue(':user_id', intval($userId), PDO::PARAM_INT);
    $query->execute();
    return $query->fetchAll(PDO::FETCH_ASSOC); // Return full property details
}

function getAppliedProperties($userId) {
    $db = new Connect();
    $query = $db->prepare("
        SELECT 
            p.id AS property_id,
            p.title,
            p.address,
            p.type,
            p.price,
            p.imageUrl,
            p.datePosted,
            p.distance,
            ap.applied_at AS application_date
        FROM appliedProp ap
        INNER JOIN mytable p ON ap.property_id = p.id
        WHERE ap.user_id = :user_id
    ");
    $query->bindValue(':user_id', intval($userId), PDO::PARAM_INT);
    $query->execute();
    return $query->fetchAll(PDO::FETCH_ASSOC); // Return full property details with application status
}
function getListedProperties($userId) {
    $db = new Connect();
    $query = $db->prepare("
        SELECT 
            p.id AS property_id,
            p.title,
            p.address,
            p.type,
            p.price,
            p.imageUrl,
            p.datePosted,
            p.distance
        FROM listedProp lp
        INNER JOIN mytable p ON lp.property_id = p.id
        WHERE lp.user_id = :user_id
    ");
    $query->bindValue(':user_id', intval($userId), PDO::PARAM_INT);
    $query->execute();
    return $query->fetchAll(PDO::FETCH_ASSOC); 
}

    
    // Print data to the screen
    function printData($id){
        $db = new Connect;
        $user = $db -> prepare('SELECT * FROM users ORDER BY id');
        $user -> execute();
        $content = '
        <table class="table">
            <thead class="thead-light">
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Avatar</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>';
        while($userInfo = $user -> fetch(PDO::FETCH_ASSOC)){
            $content .= '
            <tr>
                <td>'.$userInfo["name"].'</td>
                <td>'.$userInfo["surname"].'</td>
                <td><img style="max-width: 50px;" src="'.$userInfo["avatar"].'" alt="User Avatar"></td>
                <td>'.$userInfo["email"].'</td>
            </tr>
            ';
        }
        $content .= '</tbody></table>
        ';
        return $content;
    }
    // check if user is logged in
    function checkUserStatus($id, $sess){
        $db = new Connect;
        $user = $db -> prepare("SELECT id FROM users WHERE id=:id AND session=:session");
        $user -> execute([
            ':id'       => intval($id),
            ':session'  => $sess
        ]);
        $userInfo = $user -> fetch(PDO::FETCH_ASSOC);
        if(!$userInfo["id"]){
            return FALSE;
        }else{
            return TRUE;
        }
    }
    // function for generating password and login session
    function generateCode($length){
		$chars = "vwxyzABCD02789";
		$code = ""; 
		$clen = strlen($chars) - 1;
		while (strlen($code) < $length){ 
			$code .= $chars[mt_rand(0,$clen)];
		}
		return $code;
    }
    
    function insertData($data) {
        $db = new Connect;
        $checkUser = $db->prepare("SELECT * FROM users WHERE email=:email");
        $checkUser->execute(['email' => $data['email']]);
        $info = $checkUser->fetch(PDO::FETCH_ASSOC);

        if (!$info["id"]) {
            $session = $this->generateCode(10);
            $insertNewUser = $db->prepare("INSERT INTO users (name, surname, avatar, email, password, session) VALUES (:name, :surname, :avatar, :email, :password, :session)");
            $insertNewUser->execute([
                ':name' => $data["givenName"],
                ':surname' => $data["familyName"],
                ':avatar' => $data["avatar"],
                ':email' => $data["email"],
                ':password' => $this->generateCode(5),
                ':session' => $session
            ]);
            if($insertNewUser){
                setcookie("id", $db->lastInsertId(), time()+60*60*24*30, "/", NULL);
                setcookie("sess", $session, time()+60*60*24*30, "/", NULL);
                header('Location: ../frontend/welcome.php');
                exit();
            }else{
                return "Error inserting user!";
            }
        } else {
            setcookie("id", $info['id'], time() + 60 * 60 * 24 * 30, "/");
            setcookie("sess", $info["session"], time() + 60 * 60 * 24 * 30, "/");
            header('Location: ../frontend/userpage.php');
            exit();
        }
    }
}
?>

app.controller("formController", function($scope, $http, $window) {
    $scope.users = []

    $scope.addUser = function(){
        if($scope.frmDKy.$valid){
            $http.post("http://localhost:3000/users", $scope.user)
            .then(res=>{
                $scope.loadData();
            })
            alert("Đã đăng ký thành công tài khoản " + $scope.user.name);
        }
    }
    $scope.loadData = function(){
        $http.get("http://localhost:3000/users")
        .then(res=>{
        $scope.users = res.data
    })
    }
    
    $scope.deleteUser=(id)=>{
        $http.delete("http://localhost:3000/users/" + id)
        .then(res=>{
            $scope.loadData();
        })
    }

    $scope.loadData();

    $scope.signin = function(){
        alert("Đăng nhập thành công")
        $window.location.href = "/ASM/indexl.html#!/";
    }



    // // In your AngularJS controller or service
    // var storedUsername = localStorage.getItem('name');
    // var storedPassword = localStorage.getItem('pass');

    // $scope.login = function () {
    //     if ($scope.user.name && $scope.user.pass) {
    //         // Perform password hashing here if you implement it
    //         if ($scope.user.name === storedUsername && $scope.user.pass === storedPassword) {
    //             // Successful login
    //             $window.location.href = '/dashboard'; // Redirect to the dashboard or desired page
    //         } else {
    //             // Failed login
    //             $scope.loginError = 'Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản và mật khẩu.';
    //         }
    //     }
    // };


})
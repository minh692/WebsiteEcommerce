app.controller("dienthoaiController", function($scope, $http) {
    $scope.dienthoais = []
    // $scope.addUser = function(){
    //     if($scope.myForm.$valid){
    //         $http.post("http://localhost:3000/users", $scope.user)
    //         .then(res=>{
    //             $scope.loadData();
    //         })
    //     }
    // }
    $scope.loadData = function(){
        $http.get("http://localhost:3000/dienthoai")
        .then(res=>{
        $scope.dienthoais = res.data
    })
    }
    
    // $scope.deleteUser=(id)=>{
    //     $http.delete("http://localhost:3000/users/" + id)
    //     .then(res=>{
    //         $scope.loadData();
    //     })
    // }

    $scope.loadData();
})
app.controller("laptopController", function($scope, $http) {
    // $scope.laptops =[];
    $scope.cart = [];
    $scope.addUser = function(){
            $http.post("http://localhost:3000/laptop", $scope.laptop)
            .then(res=>{
                $scope.loadData();
                
            })
        }
    $scope.loadData = function(){
        $http.get("http://localhost:3000/laptop")
        .then(res=>{
        $scope.laptops = res.data
    })
    }
    
    $scope.deleteUser=(id)=>{
        $http.delete("http://localhost:3000/laptop/" + id)
        .then(res=>{
            $scope.loadData();
        })
    }

    $scope.editUser=function(id){
        $http.get("http://localhost:3000/laptop/"+ id)
        .then(res=>{
            $scope.edituser=res.data
            
        })        
    }

    $scope.updateUser=function(){
        $http.put("http://localhost:3000/laptop/"+$scope.edituser.id,$scope.edituser)
        .then(res=>{
          $scope.loadData()
          
        })
    }
    
    $scope.search=function(event){  
        $http.get("http://localhost:3000/laptop")
        .then(res=>{
          $scope.laptops=res.data.filter(laptop=>
            laptop.name.toLowerCase().includes($scope.txtSearch.toLowerCase())
          )
        })
      }
      
      $scope.prop = "name";
      $scope.reverse = false;
      
      $scope.sortBy = function(prop) {
          if ($scope.prop === prop) {
              $scope.reverse = !$scope.reverse;
          } else {
              $scope.prop = prop;
              $scope.reverse = false;
          }
      }

      $scope.loadData()
});




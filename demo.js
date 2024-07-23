<div>
                    <div class="card-title h5">Loại hàng</div>
                    <div class="row px-2">
                        <div class="form-check col-sm-6">
                            <input class="form-check-input" type="checkbox" value="" ng-model="loaiHangFilters.lapTop" ng-change="locSP()">
                            <label class="form-check-label" for="">
                                LapTop
                            </label>
                        </div>
                        <div class="form-check col-sm-6">
                            <input class="form-check-input" type="checkbox" value="" ng-model="loaiHangFilters.dienThoai" ng-change="locSP()">
                            <label class="form-check-label" for="">
                                Điện thoại
                            </label>
                        </div>
                        <div class="form-check col-sm-6">
                            <input class="form-check-input" type="checkbox" value="" ng-model="loaiHangFilters.phuKien" ng-change="locSP()">
                            <label class="form-check-label" for="">
                                Phụ kiện
                            </label>
                        </div>
                    </div>










                    $scope.loaiHangFilters = {
        lapTop: false,
        dienThoai: false,
        phuKien: false,
        hot: false
    };
    

    $scope.locSP = function () {
        $scope.listspLoc = angular.copy($scope.listsp);
    
        if (!$scope.loaiHangFilters.lapTop && !$scope.loaiHangFilters.dienThoai && !$scope.loaiHangFilters.phuKien && !$scope.loaiHangFilters.hot) {
            $scope.sapxeptheogia();
            return;
        }else if(!$scope.loaiHangFilters.lapTop && !$scope.loaiHangFilters.dienThoai && !$scope.loaiHangFilters.phuKien && $scope.loaiHangFilters.hot){
            $scope.listspLoc = $scope.listspLoc.filter(product => product.hot === '1');
            $scope.startLoc = 0;
            $scope.sapxeptheogia();
            return;
        }
    
        var mangTam = [];
    
        for (let i = 0; i < $scope.listspLoc.length; i++) {
            if ($scope.loaiHangFilters.lapTop && $scope.listspLoc[i].idloai === 'laptop') {
                mangTam.push($scope.listspLoc[i]);
            }
            if ($scope.loaiHangFilters.dienThoai && $scope.listspLoc[i].idloai === 'dienthoai') {
                mangTam.push($scope.listspLoc[i]);
            }
            if ($scope.loaiHangFilters.phuKien && $scope.listspLoc[i].idloai === 'phukien') {
                mangTam.push($scope.listspLoc[i]);
            }
        }

        if ($scope.loaiHangFilters.hot) {
            mangTam = mangTam.filter(product => product.hot === '1');
        }

    
        $scope.listspLoc = mangTam;
        $scope.startLoc = 0;
        $scope.sapxeptheogia();
    };
    
    $scope.sapxeptheogia = () => {
        if ($scope.uutien === 'giacao') {
            $scope.listspLoc.sort((a, b) => b.giasp - a.giasp);
        } else if ($scope.uutien === 'giathap') {
            $scope.listspLoc.sort((a, b) => a.giasp - b.giasp);
        }
    };
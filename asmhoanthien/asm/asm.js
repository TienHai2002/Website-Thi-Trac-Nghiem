function quanlysinhvien($scope,$http){
    $scope.list = [];
    $scope.vitricapnhat = -1;
    $scope.form_data = {
        ma_sv:'',
        ho_ten:'',
        chuyen_nganh_hoc:'',
        ngay_nhap_hoc:'',
        email:'',
        gioi_tinh: 1,
    };
    const url ="https://620b061fbeee430017f38481.mockapi.io/students";
    $http.get(url)
    .then(function(response){
        $scope.list = response.data;
    })
    $scope.onBtnCreateClick = function(event){
        const api = 'https://620b061fbeee430017f38481.mockapi.io/students'
        $http.post(api,$scope.form_data)
        .then(function(response){
            if(response.status ==201)
            $scope.list.push(response.data);
            alert("Thêm thành công")
        })
    }
    $scope.onBtnDeleteClick = function(event,viTri){
        const sv  = $scope.list[viTri];
        const api = 'https://620b061fbeee430017f38481.mockapi.io/students'
        $http.delete(api)
        .then(function(response){
            $scope.list.splice(viTri,1);
            alert("Xóa thành công");
        })
    }
    $scope.onBtnUpdateClick = function (event,viTri){
        const sv = $scope.list[viTri];
        $scope.form_data.ho_ten = sv.ho_ten;
        $scope.form_data.ma_sv = sv.ma_sv;
        $scope.form_data.chuyen_nganh_hoc = sv.chuyen_nganh_ho
        $scope.form_data.ngay_nhap_hoc = sv.ngay_nhap_hoc;
        $scope.form_data.email = sv.email;
        $scope.form_data.gioi_tinh= sv.gioi_tinh;

        $scope.vitricapnhat = viTri;
    }
    $scope.onBtnCapNhatClick = function(event){
        const sv  = $scope.list[vitricapnhat];
        const api = 'https://620b061fbeee430017f38481.mockapi.io/students'
        $http.put(api,$scope.form_data)
        .then(function(response){
            console.log(response);
            $scope.list[$scope.vitricapnhat] = response.data;
        })
    }

    $scope.onBtnClear = function(){
        $scope.form_data= {}
    }
    

}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./../service/product.service");
var ProductComponent = (function () {
    function ProductComponent(_productService) {
        this._productService = _productService;
        this.products = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.load();
    };
    ProductComponent.prototype.load = function () {
        var _this = this;
        this._productService.getProducts().subscribe(function (data) { return _this.products = data; }, function (error) { return alert(error); });
    };
    ProductComponent.prototype.delete = function (product) {
        var _this = this;
        console.log('delete product :' + product.id);
        this._productService.delete(product.id).subscribe(function (data) {
            var index = _this.products.indexOf(product);
            _this.products.splice(index, 1);
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'app-product',
        providers: [product_service_1.ProductService],
        templateUrl: './product/product.component.html',
        styleUrls: ['./product/product.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnRUFBOEQ7QUFTOUQsSUFBYSxnQkFBZ0I7SUFJM0IsMEJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUZuRCxhQUFRLEdBQW1CLEVBQUUsQ0FBQztJQUV5QixDQUFDO0lBRXhELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUFBLGlCQUlDO1FBRkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBcEIsQ0FBb0IsRUFDdkUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUF2QixpQkFRQztRQVBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3BELElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFSCx1QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7S0FDL0MsQ0FBQztxQ0FLcUMsZ0NBQWM7R0FKeEMsZ0JBQWdCLENBMEI1QjtBQTFCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2UvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbC9wcm9kdWN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2R1Y3QnLFxuICBwcm92aWRlcnM6IFtQcm9kdWN0U2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByb2R1Y3RzOiBBcnJheTxQcm9kdWN0PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkKCk7XG4gIH1cblxuICBsb2FkKCkge1xuXG4gICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnByb2R1Y3RzID0gZGF0YSxcbiAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSk7XG4gIH1cblxuICBkZWxldGUocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIGNvbnNvbGUubG9nKCdkZWxldGUgcHJvZHVjdCA6JyArIHByb2R1Y3QuaWQpO1xuICAgIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmRlbGV0ZShwcm9kdWN0LmlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvZHVjdHMuaW5kZXhPZihwcm9kdWN0KTtcbiAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcblxuXG4gIH1cblxufVxuIl19
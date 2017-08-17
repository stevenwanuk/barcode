"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("./../model/user");
var oauth_service_1 = require("./oauth.service");
var SessionService = (function () {
    function SessionService(_router, _oauthService) {
        this._router = _router;
        this._oauthService = _oauthService;
        this.user = new user_1.User();
        console.log('new instance of SessionService');
    }
    SessionService.prototype.login = function (loginData) {
        var _this = this;
        this._oauthService.obtainAccessToken(loginData).subscribe(function (data) {
            _this.user.token = data;
            _this.user.email = loginData.username;
            _this.user.isLogin = true;
            console.log('login success');
            _this._router.navigate(['/']);
        });
    };
    SessionService.prototype.getUser = function () {
        return this.user;
    };
    SessionService.prototype.isLogin = function () {
        console.log('user.isLogin: ' + this.user.isLogin);
        return this.user.isLogin;
    };
    SessionService.prototype.logout = function () {
        this.user = new user_1.User();
        this._router.navigate(['/login']);
    };
    return SessionService;
}());
SessionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, oauth_service_1.OauthService])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTZEO0FBQzdELDBDQUF5QztBQUN6Qyx3Q0FBdUM7QUFDdkMsaURBQStDO0FBRy9DLElBQWEsY0FBYztJQUl2Qix3QkFBb0IsT0FBZSxFQUFVLGFBQTJCO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUZoRSxTQUFJLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUU0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFBQyxDQUFDO0lBRTVILDhCQUFLLEdBQUwsVUFBTSxTQUFTO1FBQWYsaUJBV0M7UUFWRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFFMUQsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQUtvQixlQUFNLEVBQXlCLDRCQUFZO0dBSi9ELGNBQWMsQ0FrQzFCO0FBbENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQQUNLQUdFX1JPT1RfVVJMIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vLi4vbW9kZWwvdXNlcic7XG5pbXBvcnQgeyBPYXV0aFNlcnZpY2UgfSBmcm9tICcuL29hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB1c2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9vYXV0aFNlcnZpY2U6IE9hdXRoU2VydmljZSkgeyBjb25zb2xlLmxvZygnbmV3IGluc3RhbmNlIG9mIFNlc3Npb25TZXJ2aWNlJyk7IH1cblxuICAgIGxvZ2luKGxvZ2luRGF0YSkge1xuICAgICAgICB0aGlzLl9vYXV0aFNlcnZpY2Uub2J0YWluQWNjZXNzVG9rZW4obG9naW5EYXRhKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMudXNlci50b2tlbiA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBsb2dpbkRhdGEudXNlcm5hbWU7XG4gICAgICAgICAgICB0aGlzLnVzZXIuaXNMb2dpbiA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVzZXIoKTogVXNlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXI7XG4gICAgfVxuXG4gICAgaXNMb2dpbigpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zb2xlLmxvZygndXNlci5pc0xvZ2luOiAnICsgdGhpcy51c2VyLmlzTG9naW4pO1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyLmlzTG9naW47XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgfVxuXG59XG4iXX0=
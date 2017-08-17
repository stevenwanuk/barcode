"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_service_1 = require("./../service/session.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(_router, _sessionService) {
        this._router = _router;
        this._sessionService = _sessionService;
        this.loginData = { username: 'stevenwanuk@gmail.com', password: '123' };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this._sessionService.login(this.loginData);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login/login.component.html',
        styleUrls: ['./login/login.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, session_service_1.SessionService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdFQUE4RDtBQUM5RCwwQ0FBeUM7QUFPekMsSUFBYSxjQUFjO0lBSXpCLHdCQUFvQixPQUFlLEVBQVUsZUFBK0I7UUFBeEQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUY1RSxjQUFTLEdBQUcsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBRWEsQ0FBQztJQUVqRixpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzNDLENBQUM7cUNBSzZCLGVBQU0sRUFBMkIsZ0NBQWM7R0FKakUsY0FBYyxDQWExQjtBQWJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGxvZ2luRGF0YSA9IHsgdXNlcm5hbWU6ICdzdGV2ZW53YW51a0BnbWFpbC5jb20nLCBwYXNzd29yZDogJzEyMycgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMuX3Nlc3Npb25TZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5EYXRhKTtcbiAgfVxuXG59XG4iXX0=
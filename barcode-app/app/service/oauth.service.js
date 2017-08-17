"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var base64 = require("base-64");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var app_setting_1 = require("./../app-setting");
var OauthService = (function () {
    function OauthService(_router, _http) {
        this._router = _router;
        this._http = _http;
    }
    OauthService.prototype.obtainAccessToken = function (loginData) {
        var body = 'client_id=' + app_setting_1.AppSetting.OAUTH_CLIENT_ID
            + '&grant_type=' + app_setting_1.AppSetting.OAUTH_CLIENT_GRANT_TYPE
            + '&username=' + loginData.username
            + '&password=' + loginData.password;
        /* spring oauth doesn't support json.
JSON.stringify({
   username: loginData.username,
   password: loginData.password,
   grant_type: AppSetting.OAUTH_CLIENT_GRANT_TYPE,
   client_id: AppSetting.OAUTH_CLIENT_ID
});
*/
        var headers = new http_1.Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Basic ' + base64.encode(app_setting_1.AppSetting.OAUTH_CLIENT_ID + ':' + app_setting_1.AppSetting.OAUTH_CLIENT_SECRET)
        });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(body);
        console.log(base64.encode(app_setting_1.AppSetting.OAUTH_CLIENT_ID + ':' + app_setting_1.AppSetting.OAUTH_CLIENT_SECRET));
        return this._http.post(app_setting_1.AppSetting.OAUTH_TOKEN_API_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    OauthService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return OauthService;
}());
OauthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], OauthService);
exports.OauthService = OauthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLHNDQUF3RTtBQUN4RSw4Q0FBNkM7QUFDN0MsZ0NBQWtDO0FBQ2xDLG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFFL0IsZ0RBQThDO0FBSzlDLElBQWEsWUFBWTtJQUVyQixzQkFBb0IsT0FBZSxFQUFVLEtBQVc7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07SUFBSSxDQUFDO0lBRTdELHdDQUFpQixHQUFqQixVQUFrQixTQUFTO1FBQ3ZCLElBQU0sSUFBSSxHQUNOLFlBQVksR0FBRyx3QkFBVSxDQUFDLGVBQWU7Y0FDdkMsY0FBYyxHQUFHLHdCQUFVLENBQUMsdUJBQXVCO2NBQ25ELFlBQVksR0FBRyxTQUFTLENBQUMsUUFBUTtjQUNqQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUV4Qzs7Ozs7OztFQU9OO1FBQ00sSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7WUFDeEIsY0FBYyxFQUFFLGtEQUFrRDtZQUNsRSxlQUFlLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxlQUFlLEdBQUcsR0FBRyxHQUFHLHdCQUFVLENBQUMsbUJBQW1CLENBQUM7U0FDL0csQ0FBQyxDQUFDO1FBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxlQUFlLEdBQUcsR0FBRyxHQUFHLHdCQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQzlGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBVSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7YUFDaEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxrQ0FBVyxHQUFuQixVQUFvQixLQUFVO1FBQzFCLElBQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUM1RSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FHb0IsZUFBTSxFQUFpQixXQUFJO0dBRi9DLFlBQVksQ0FxQ3hCO0FBckNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBiYXNlNjQgZnJvbSAnYmFzZS02NCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgQXBwU2V0dGluZyB9IGZyb20gJy4vLi4vYXBwLXNldHRpbmcnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuLy4uL21vZGVsL3Rva2VuJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2F1dGhTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cblxuICAgIG9idGFpbkFjY2Vzc1Rva2VuKGxvZ2luRGF0YSk6IE9ic2VydmFibGU8VG9rZW4+IHtcbiAgICAgICAgY29uc3QgYm9keSA9XG4gICAgICAgICAgICAnY2xpZW50X2lkPScgKyBBcHBTZXR0aW5nLk9BVVRIX0NMSUVOVF9JRFxuICAgICAgICAgICAgKyAnJmdyYW50X3R5cGU9JyArIEFwcFNldHRpbmcuT0FVVEhfQ0xJRU5UX0dSQU5UX1RZUEVcbiAgICAgICAgICAgICsgJyZ1c2VybmFtZT0nICsgbG9naW5EYXRhLnVzZXJuYW1lXG4gICAgICAgICAgICArICcmcGFzc3dvcmQ9JyArIGxvZ2luRGF0YS5wYXNzd29yZDtcblxuICAgICAgICAvKiBzcHJpbmcgb2F1dGggZG9lc24ndCBzdXBwb3J0IGpzb24uIFxuSlNPTi5zdHJpbmdpZnkoe1xuICAgdXNlcm5hbWU6IGxvZ2luRGF0YS51c2VybmFtZSxcbiAgIHBhc3N3b3JkOiBsb2dpbkRhdGEucGFzc3dvcmQsXG4gICBncmFudF90eXBlOiBBcHBTZXR0aW5nLk9BVVRIX0NMSUVOVF9HUkFOVF9UWVBFLFxuICAgY2xpZW50X2lkOiBBcHBTZXR0aW5nLk9BVVRIX0NMSUVOVF9JRFxufSk7XG4qL1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArIGJhc2U2NC5lbmNvZGUoQXBwU2V0dGluZy5PQVVUSF9DTElFTlRfSUQgKyAnOicgKyBBcHBTZXR0aW5nLk9BVVRIX0NMSUVOVF9TRUNSRVQpXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJhc2U2NC5lbmNvZGUoQXBwU2V0dGluZy5PQVVUSF9DTElFTlRfSUQgKyAnOicgKyBBcHBTZXR0aW5nLk9BVVRIX0NMSUVOVF9TRUNSRVQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChBcHBTZXR0aW5nLk9BVVRIX1RPS0VOX0FQSV9VUkwsIGJvZHksIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zdCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gICAgfVxufVxuIl19
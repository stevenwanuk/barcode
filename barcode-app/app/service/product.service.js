"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var session_service_1 = require("./session.service");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var app_setting_1 = require("./../app-setting");
var ProductService = (function () {
    function ProductService(_router, _http, _sessionService) {
        this._router = _router;
        this._http = _http;
        this._sessionService = _sessionService;
    }
    ProductService.prototype.getProducts = function () {
        var headers = new http_1.Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Bearer ' + this._sessionService.getUser().token.access_token
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(app_setting_1.AppSetting.RESOURCE_BASE_API_URL + 'products', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.delete = function (id) {
        var headers = new http_1.Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Bearer ' + this._sessionService.getUser().token.access_token
        });
        console.log(headers.get('Authorization'));
        var options = new http_1.RequestOptions({ headers: headers });
        var url = app_setting_1.AppSetting.RESOURCE_BASE_API_URL + 'products/' + id;
        console.log('trying to delete product:' + id + ' by url:' + url);
        return this._http.delete(url, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, session_service_1.SessionService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUN6QyxzQ0FBd0U7QUFDeEUsOENBQTZDO0FBRTdDLHFEQUFtRDtBQUNuRCxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLHFDQUFtQztBQUVuQyxnREFBOEM7QUFHOUMsSUFBYSxjQUFjO0lBRXZCLHdCQUFvQixPQUFlLEVBQVUsS0FBVyxFQUFVLGVBQStCO1FBQTdFLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBQUksQ0FBQztJQUl0RyxvQ0FBVyxHQUFYO1FBQ0ksSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7WUFDeEIsY0FBYyxFQUFFLGtEQUFrRDtZQUNsRSxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVk7U0FDakYsQ0FBQyxDQUFDO1FBRUgsSUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHdCQUFVLENBQUMscUJBQXFCLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQzthQUN4RSxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxFQUFVO1FBR2IsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7WUFDeEIsY0FBYyxFQUFFLGtEQUFrRDtZQUNsRSxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVk7U0FDakYsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBTSxHQUFHLEdBQUcsd0JBQVUsQ0FBQyxxQkFBcUIsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsRUFBRSxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzthQUNqQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLG9DQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDMUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzVFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQUdvQixlQUFNLEVBQWlCLFdBQUksRUFBMkIsZ0NBQWM7R0FGeEYsY0FBYyxDQXlDMUI7QUF6Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbC9wcm9kdWN0JztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXNzaW9uLnNlcnZpY2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xuXG5pbXBvcnQgeyBBcHBTZXR0aW5nIH0gZnJvbSAnLi8uLi9hcHAtc2V0dGluZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlKSB7IH1cblxuXG5cbiAgICBnZXRQcm9kdWN0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RbXT4ge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLl9zZXNzaW9uU2VydmljZS5nZXRVc2VyKCkudG9rZW4uYWNjZXNzX3Rva2VuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoQXBwU2V0dGluZy5SRVNPVVJDRV9CQVNFX0FQSV9VUkwgKyAncHJvZHVjdHMnLCBvcHRpb25zKVxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBkZWxldGUoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuXG5cbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5fc2Vzc2lvblNlcnZpY2UuZ2V0VXNlcigpLnRva2VuLmFjY2Vzc190b2tlblxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coaGVhZGVycy5nZXQoJ0F1dGhvcml6YXRpb24nKSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICBjb25zdCB1cmwgPSBBcHBTZXR0aW5nLlJFU09VUkNFX0JBU0VfQVBJX1VSTCArICdwcm9kdWN0cy8nICsgaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZGVsZXRlIHByb2R1Y3Q6JyArIGlkICsgJyBieSB1cmw6JyArIHVybCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHVybCwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnN0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgICB9XG59XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_service_1 = require("./../service/session.service");
var HomeComponent = (function () {
    function HomeComponent(_sessionService) {
        this._sessionService = _sessionService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user = this._sessionService.getUser();
    };
    HomeComponent.prototype.logout = function () {
        this._sessionService.logout();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home/home.component.html',
        styleUrls: ['./home/home.component.css']
    }),
    __metadata("design:paramtypes", [session_service_1.SessionService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxnRUFBOEQ7QUFROUQsSUFBYSxhQUFhO0lBRXhCLHVCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBSSxDQUFDO0lBSXhELGdDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUN6QyxDQUFDO3FDQUdxQyxnQ0FBYztHQUZ4QyxhQUFhLENBY3pCO0FBZFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2F1dGhTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlL29hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2Uvc2Vzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uL21vZGVsL3VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nlc3Npb25TZXJ2aWNlOiBTZXNzaW9uU2VydmljZSkgeyB9XG5cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy51c2VyID0gdGhpcy5fc2Vzc2lvblNlcnZpY2UuZ2V0VXNlcigpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuX3Nlc3Npb25TZXJ2aWNlLmxvZ291dCgpO1xuICB9XG59XG4iXX0=
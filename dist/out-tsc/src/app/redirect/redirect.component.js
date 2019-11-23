import * as tslib_1 from "tslib";
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
var RedirectComponent = /** @class */ (function () {
    function RedirectComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    RedirectComponent.prototype.ngOnInit = function () {
    };
    RedirectComponent.prototype.canActivate = function (next, state) {
        var _this = this;
        if (state.url === '/sign-in') {
            window.location.href = next.data.externalUrl;
        }
        else if (state.root.queryParams.code) {
            // const { code } = state.root.queryParams
            // console.log(code)
            // console.log(state)
            // console.log("base uri = " + '')
            var code = state.root.queryParams.code;
            var params = new HttpParams({
                fromObject: {
                    code: code,
                    redirect_uri: 'http://localhost:8100',
                    // redirect_uri: 'http://scott.dto.technology',
                    client_id: 'J07vZjjb55qryMp3V6fSYuxs7KhwctgsD1RZzGXp',
                    client_secret: 'Hf9nHW0e99C7wUBrCRypbY8NZ7YH5AEnk3jSujVn',
                    grant_type: 'authorization_code',
                }
            });
            var httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST'
                })
            };
            return this.http.post("https://cors-anywhere.herokuapp.com/https://oauth.cmu.ac.th/v1/GetToken.aspx", params, httpOptions).pipe(map(function (data) {
                // if (data.token && data.user) {
                //   localStorage.setItem('token', data.token)
                //   localStorage.setItem('currentUser', JSON.stringify(data.user))
                //   if(data.user.authorities.map(authority => authority.name).includes("ROLE_STUDENT"))
                //     localStorage.setItem('studentId', JSON.stringify(data.studentId))
                // }
                console.log(data.access_token);
                _this.http.get("https://misapi.cmu.ac.th/cmuitaccount/v1/api/cmuitaccount/basicinfo", {
                    headers: new HttpHeaders({
                        'Accept': 'application/json',
                        'Access-Control-Allow-Headers': 'Content-Type',
                        'Authorization': "Bearer " + data.access_token
                    })
                }).pipe(map(function (data) {
                    console.log(data);
                }));
                // this.router.navigate(['/student-tabs/view-event'])
                return data;
            }));
        }
        else {
            this.router.navigate(['/login']);
        }
        return true;
    };
    RedirectComponent = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        Component({
            selector: 'app-redirect',
            templateUrl: './redirect.component.html',
            styleUrls: ['./redirect.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, HttpClient])
    ], RedirectComponent);
    return RedirectComponent;
}());
export { RedirectComponent };
//# sourceMappingURL=redirect.component.js.map
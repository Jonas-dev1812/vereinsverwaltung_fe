import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Constants {
    public static API_ENDPOINT: string = 'http://localhost/vereinsverwaltung/vereinsverwaltung_be/api';
    public static LOGIN_ENDPOINT: string = "http://localhost/vereinsverwaltung/vereinsverwaltung_be/core/CheckLogin.php";
    public static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('username:password')
        })
    };

    public getHeaders(username: string, password: string): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${username}:${password}`)
        })
    }
}
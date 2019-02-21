import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class ProjectService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    
    testService(){

        return "Probando el servicio 3";
    }

    saveProject(project: Project): Observable <any>{
        let params = JSON.stringify(project);
        let headears = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save-project',params, {headers:headears});
    }

    getProjects(): Observable <any>{
        let headears = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'projects',{headers:headears});
    }

    getProject(id): Observable <any>{

        let headears = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'project/'+id,{headers: headears});

    }

    deleteProject(id): Observable <any>{

        let headears = new HttpHeaders().set('Content-Type','application/json');

        return this._http.delete(this.url+'project/'+id,{headers:headears});
    }

    updateProject(project): Observable <any>{
        let params = JSON.stringify(project);
        let headears = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'project/'+ project._id,params,{headers:headears});

    }

}
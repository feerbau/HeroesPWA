import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import PouchDB from 'pouchdb';
@Injectable()

export class DatabaseService {

    public db;
    public constructor() {
      this.db = new PouchDB('favourites')
    }

    public getAll(): any {
        return this.db.allDocs({include_docs: true}).then((docs) => {
          let heroes = [];
          docs.rows.map((row) => {
            console.log(row)
            heroes.push(row.doc);
          });
          return heroes
        });
    }


    addToFavorites(id: string, name: string){
      let hero = { 
        _id: id,
        name: name
        };
      this.db.put(hero).then(function () {
        console.log('GOOD ')
      }).catch(function (err) {
        if (err.name === 'conflict') {
        // conflict!
        console.log('conflictooo', err)
        } else {
        // some other error
        console.log("errorrr", err)
        }
      });
    }

    async getHero(id:string): Promise<boolean>{
      return await this.db.get(id).then(function (res) {
        console.log('GOOD ', res)
        return true;
      }).catch(function (err) {
        console.log('conflictooo', err)
        console.log("errorrr", err)
        return false;
        });
    }

    async removeFromFavorites(id: string){
      return await this.db.get(id).then(hero => {
        return this.db.remove(hero);
      }).then(function (result) {
        // handle result
      }).catch(function (err) {
        console.log(err);
      });
    }
    
}
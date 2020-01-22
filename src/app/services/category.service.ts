
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoryService {
    constructor(private db: AngularFireDatabase) { }

    getCategories() {
        // ref is used to apply category value sorting here
        return this.db.list('/categories', ref =>
            ref.orderByChild('name')).snapshotChanges().pipe(
                map(action => {
                    return action.map(item => {
                        const key = item.payload.key;
                        const data = { key, ...item.payload.val() };
                        return data;
                    });
                }));
    }
}

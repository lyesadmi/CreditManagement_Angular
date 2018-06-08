import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor (
    private router: Router,
    public afAuth: AngularFireAuth
  ) {

  }
  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }));
  }

}


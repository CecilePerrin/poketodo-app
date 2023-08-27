import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor() {
    // mettre en place des vérifications d'état de connexion ici
  }

  login(username: string, password: string): void {
    // effectuez la logique d'authentification
    // Par exemple, envoyer une requête HTTP au serveur avec les informations de connexion
    // Après une authentification réussie, mettre à jour isLoggedInSubject
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    // Effectuer la logique de déconnexion
    // réinitialiser les données d'authentification et mettre à jour isLoggedInSubject
    this.isLoggedInSubject.next(false);
  }
}

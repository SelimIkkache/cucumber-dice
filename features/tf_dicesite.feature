Feature: Obtenir le résultat d’un lancer de dé

  Scenario:
    Given Je suis sur internet
    When J’ouvre l’url "http://localhost/dice"
    Then Une page s’ouvre qui affiche un nombre de 1 à 6

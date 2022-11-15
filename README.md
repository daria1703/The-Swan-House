<h1 align="center">The Swan House</h1>
The Swan House to sklep internetowy zajmujący się sprzedażą biżuterii. 
## Aplikacja internetowa

### Opis projektu 

### Rejestracja

Po uruchomieniu apliakcji poprzez wpisanie w terminalu Visual Studio Code komendy npm start jako pierwsza ukazuję się podstrona rejestracji użytkownika. Wymagane dane do rejestracji to: nazwa użytkownika, e-mail oraz hasło. Po wciśnięciu przycisku "Sign up" następuje utowrzenie konta i przejście do ekranu home.

![Rejestracja](https://user-images.githubusercontent.com/80101842/159140485-c53806ca-7087-49f7-9824-c1a04b3ce097.png)

### Logowanie

Gdy uzytkownik posiada już konto w serwisie to loguje się poprzez uzupełnienie formularza w zakładce Login. Podaje on e-mail oraz hasło. Po wciśnięciu przycisku "Log in", zostaje przekierowany na stronę główną.

![Logowanie](https://user-images.githubusercontent.com/80101842/159140484-7df30c40-f3d9-4ad9-b9ff-475bf32bc5f7.png)

### Home
Użytkownik, wchodząc na sklepu internetowego The Swan House ma możliwość zobaczenia najnowyszych ofert, najbardziej popularnych przedmiotów, okazjonalnych
koleckji biżuterii a także wyszukać produkt po marce, kolorze czy rozmiarze. Niezbędne informacje do realizacji tych funkcjonalności zostaną pobrane z specjalnie stworzonego przeze mnie na potrzeby projektu API. 

<p align="center">
   <img src="https://user-images.githubusercontent.com/80101842/159140480-a30281ec-71ed-451b-8183-3ce8d285f39d.png">
</p>

### Podstrona produktów
Gdy klient kliknie wybrany przez siebie link w nawbarze, zostanie przekierowany do strony produktów. Zostanie wyswietlona strona z listą spełniających warunek produktów. Użytkownik będzie miał możliwość przefiltrowania listy w celu znalezienia porządanego towaru.

![Strona produktów](https://user-images.githubusercontent.com/80101842/159140486-6a746e3d-24d1-428a-bbe1-67e8fb001338.png)

### Podstrona produktu

Użytkownik po wybraniu z listy jednego towaru zostanie przekierowany do strony produktu.
Strona ta zawierać będzie opis towaru, jego cenę, rozmiar, pokazowe zdjęcia, mozliwość dodania
do listy życzeń oraz przycisk "Dodaj do koszyka".

![Strona produktu](https://user-images.githubusercontent.com/80101842/159140487-9dc36dac-57a1-4c81-aff9-90f374af8be8.png)

# Proces tworzenia projektu
Projekt będzie realizowany przy wykorzystaniu podstawowych narzędzi, służących zarówno do projektowania warstwy wizualnej jak i do kodowania strony internetowej. W trakcie pracy używam programów **Figma** oraz **Visual Studio Code**. Do kontroli wersji oprogramowania, standardowo skorzystałam z **Github**.

**Funkcjonalności**
- Logowanie/Rejestrowanie użytkownika
- Dodawanie/Usuwanie produktu z koszyka
- Zwiększanie/Zmniejszanie ilość produktów w koszyku
- Możliwość komentowania/polubienia przedmiotu
- Możliwość dodania produktu do listy ulubionych
- Możliwośc dodania vouchera podczas procesu zakupowego
- Wyszukiwanie przedmiotu po nazwie
- Wyświetlenie ostatnio dodanych produktów
- Filtrowanie/Sortowanie po wadze/rozmiarze/marce
- Dezaktywacja konta użytkownika
- Zakup produktu


**Poczynione kroki**
- Stworzenie konceptu strony
- Stworzenie szablonu strony
- Inicjalizacja projektu i repozytorium
- Stworzenie struktury strony
- Wykorzystanie języka Javascript do stworzenia funkcjonalności strony
- Obsługa zdarzeń na stronie przy użyciu języka Javascript

**Technologie**
- REST API
- JavaScript
- HTML
- CSS
- GIT
- Figma
- MongoDB

**Diagram ERD**

[Schemat bazy danych.drawio 20.10.2022.pdf](https://github.com/daria1703/The-Swan-House/files/10016020/Schemat.bazy.danych.drawio.20.10.2022.pdf)

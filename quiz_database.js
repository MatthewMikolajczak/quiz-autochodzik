//Scripts that creating database of questions and answers
var questionText = new Array();
var questionImage = new Array();
var answersTexts = new Array();
var answersImages = new Array();

function addQuestion(qTxt, qImg, aTxt, aImg) {
    questionText.push(qTxt);
    questionImage.push(qImg);
    answersTexts.push(aTxt);
    answersImages.push(aImg);
}

addQuestion(//1
'Które auto jest opisane na szybie?',
'q1.jpg',
[null,null,null],
['q1a1.jpg','q1a2.jpg','q1a3.jpg']
);
addQuestion(//2
'Które zwierzę nie jest spotykane na wiejskiej drodze?',
'q2.jpg',
[null,null,null],
['q2a1.jpg','q2a2.jpg','q2a3.jpg']
);
addQuestion(//3
'Kiedy zrobiono zdjęcie?',
'q3.jpg',
[null,null,null],
['q3a1.PNG','q3a2.PNG','q3a3.PNG']
);
addQuestion(//4
'Którą drogą nie pójdą chłopcy na spacer?',
'q4.jpg',
[null,null,null],
['q4a1.jpg','q4a2.jpg','q4a3.jpg']
);
addQuestion(//5
'Kto przechodzi nieprawidłowo?',
'q5.jpg',
[null,null,null],
['q5a1.jpg','q5a2.jpg','q5a3.jpg']
);
addQuestion(//6
'Jakiego państwa przekraczamy granicę?',
'q6.jpg',
[null,null,null],
['q6a1.jpg','q6a2.jpg','q6a3.jpg']
);
addQuestion(//7
'Które zdanie kierowcy dużego auta jest prawdziwe?',
'q7.jpg',
['Jutro pojadę do warsztatu i założę nowe zimówki','Jutro jestem umówiony na zmianę na letnie opony','Jutro weźmiemy leżaki i pojedziemy na plażę'],
[null,null,null]
);
addQuestion(//8
'Którym autem jest najłatwiej zaparkować ?',
'q8.jpg',
[null,null,null],
['q8a1.jpg','q8a2.jpg','q8a3.jpg']
);
addQuestion(//9
'Samochody zatrzymały się, żeby przepuścić...',
'q9.jpg',
[null,null,null],
['q9a1.jpg','q9a2.jpg','q9a3.jpg']
);
addQuestion(//10
'Który samochód najlepiej przejedzie górską trasę?',
'q10.jpg',
[null,null,null],
['q10a1.jpg','q10a2.jpg','q10a3.jpg']
);
addQuestion(//11
'Jak nazywa się pojazd przewożący samochody?',
'q11.jpg',
['laweta','lambreta','larisa'],
[null,null,null]
);
addQuestion(//12
'W jakim filmie zagrał ten niebieski samochód?',
'q12.jpg',
[null,null,null],
['q12a1.jpg','q12a2.jpg','q12a3.jpg']
);
addQuestion(//13
'Ile rowerów można jeszcze zaparkować?',
'q13.jpg',
['11','9','12'],
[null,null,null]
);
addQuestion(//14
'W jakim kierunku pojadą auta na czerwonym?',
'q14.jpg',
['lewo','prawo','prosto'],
[null,null,null]
);
addQuestion(//15
'Którą drogą można jechać na rowerze?',
'q15.jpg',
[null,null,null],
['q15a1.jpg','q15a2.jpg','q15a3.jpg']
);
addQuestion(//16
'Gdzie można spotkać krasnoludki?',
'q16.jpg',
['Wrocław','Gdańsk','Warszawa'],
[null,null,null]
);
addQuestion(//17
'W jakim kraju Zebra jest żółta?',
'q17.jpg',
['Tam, gdzie robią najdroższe zegarki','Tam, gdzie żył i komponował Mozart','Tam, gdzie jest najwyższy szczyt Europy'],
[null,null,null]
);
addQuestion(//18
'Jakiego słowa brakuje?',
'q18.jpg',
['krok','skok','cmok'],
[null,null,null]
);
addQuestion(//19
'Co oznacza niebieski znak?',
'q19.jpg',
['Kieruje do punktu informacyjnego','Informuje o opadach deszczu','Nakazuje szybko skręcić w lewo'],
[null,null,null]
);
addQuestion(//20
'Na którym zdjęciu jest "grająca" zebra?',
'q20.jpg',
[null,null,null],
['q20a1.jpg','q20a2.jpg','q20a3.jpg']
);
addQuestion(//21
'Który pojazd zatrzyma się na przystanku?',
'q21.jpg',
[null,null,null],
['q21a1.jpg','q21a2.jpg','q21a3.jpg']
);
addQuestion(//22
'Nasze auto dostawcze...',
'q22.jpg',
['Dostarcza kwiaty','Rozwozi pieczywo','Przewozi owoce'],
[null,null,null]
);
addQuestion(//23
'Co rowerzyści noszą na głowie?',
'q23.jpg',
[null,null,null],
['q23a1.jpg','q23a2.jpg','q23a3.jpg']
);
addQuestion(//24
'Co robią osoby na zdjęciu?',
'q24.jpg',
['Oglądają koncert','Idą przez ulicę','Siedzą przy stoliku'],
[null,null,null]
);
addQuestion(//25
'Na czym przewożone jest auto na zdjęciu?',
'q25.jpg',
['prom','tratwa','barka'],
[null,null,null]
);
addQuestion(//26
'Na kogo muszą uważać przechodnie?',
'q26.jpg',
[null,null,null],
['q26a1.jpg','q26a2.jpg','q26a3.jpg']
);
addQuestion(//27
'Na jaki numer dzwonimy, gdy potrzebna pomoc?',
'q27.jpg',
['112','122','102'],
[null,null,null]
);
addQuestion(//28
'Który znak pasuje do sytuacji na zdjęciu?',
'q28.jpg',
[null,null,null],
['q28a1.jpg','q28a2.jpg','q28a3.jpg']
);
addQuestion(//29
'Który kierowca jedzie prawidłowo?',
'q29.jpg',
[null,null,null],
['q29a1.jpg','q29a2.jpg','q29a3.jpg']
);
addQuestion(//30
'Jakie drzewo rośnie za znakiem miejscowości DĄB?',
'q30.jpg',
['brzoza','dąb','klon'],
[null,null,null]
);
addQuestion(//31
'Dokąd jest najkrótsza droga?',
'q31.jpg',
['Bruksela','Hamburg','Sydney'],
[null,null,null]
);
addQuestion(//32
'Ilu rowerzystów jedzie na ulicy?',
'q32.jpg',
['8','6','7'],
[null,null,null]
);
addQuestion(//33
'Co oznacza ten znak?',
'q33.jpg',
['Ostry zjazd','15% zjazd cenowy','Zjeżdżalnia dla dzieci'],
[null,null,null]
);
addQuestion(//34
'Kto może pojechać prosto?',
'q34.jpg',
[null,null,null],
['q34a1.jpg','q34a2.jpg','q34a3.jpg']
);
addQuestion(//35
'Kto nie stoi na jezdni?',
'q35.jpg',
[null,null,null],
['q35a1.jpg','q35a2.jpg','q35a3.jpg']
);
addQuestion(//36
'Gdzie leży ta miejscowość?',
'q36.jpg',
['Kaszuby','Śląsk','Małopolska'],
[null,null,null]
);
addQuestion(//37
'Jaki symbol odpowiada sytuacji na zdjęciu?',
'q37.jpg',
[null,null,null],
['q37a1.png','q37a2.png','q37a3.png']
);
addQuestion(//38
'Przed czym ostrzega ten znak?',
'q38.jpg',
[null,null,null],
['q38a1.jpg','q38a2.jpg','q38a3.jpg']
);
addQuestion(//39
'Jakich sportowców przewoził autokar?',
'q39.jpg',
['Piłkarzy','Siatkarzy','Tenisistów'],
[null,null,null]
);
addQuestion(//40
'W jakim mieście są takie przejścia dla pieszych?',
'q40.jpg',
['Londyn','Paryż','Istambuł'],
[null,null,null]
);
addQuestion(//41
'Z jakiego kraju są kibice na zdjęciu?',
'q41.jpg',
['Hiszpania','Włochy','Grecja'],
[null,null,null]
);
addQuestion(//42
'Który rowerzysta jedzie nieprawidłowo?',
'q42.jpg',
[null,null,null],
['q42a1.jpg','q42a2.jpg','q42a3.jpg']
);
addQuestion(//43
'Który pies jest w ciężarówce?',
'q43.jpg',
[null,null,null],
['q43a1.jpg','q43a2.jpg','q43a3.jpg']
);
addQuestion(//44
'Ile dużych kół widać na zdjęciu?',
'q44.jpg',
['5','12','17'],
[null,null,null]
);
addQuestion(//45
'Które zdanie kierowcy jest prawdziwe?',
'q45.jpg',
['Przed nami ostatnie 200 metrów','Do głównej drogi zostało 200 minut','Teraz zobaczycie 200 trójkątów'],
[null,null,null]
);
addQuestion(//46
'Które auto ma awarie świateł?',
'q46.jpg',
[null,null,null],
['q46a1.jpg','q46a2.jpg','q46a3.jpg']
);
addQuestion(//47
'Co się zdarzyło?',
'q47.jpg',
['Roboty drogowe. Blokada','Bieg terenowy z przeszkodami','Biało-czerwona impreza'],
[null,null,null]
);
addQuestion(//48
'Co tworzy białe smugi?',
'q48.jpg',
[null,null,null],
['q48a1.jpg','q48a2.jpg','q48a3.jpg']
);
addQuestion(//49
'Kto jest najlepiej widoczny?',
'q49.jpg',
[null,null,null],
['q49a1.jpg','q49a2.jpg','q49a3.jpg']
);
addQuestion(//50
'Który znak wskazuje W PRAWO?',
'q50.jpg',
[null,null,null],
['q50a1.jpg','q50a2.jpg','q50a3.jpg']
);

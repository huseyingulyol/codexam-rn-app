
PROMPT="""
Amaç: Kodlama sınavını çözen bir uygulama yaptık. Şuanda senden istediğimiz aşağıdaki verilen OCR çıktısını bir düzenlemen.

	
Kurallar:
Varolandan hariç hiç bir ekstra kelime ekleme veya silme yapma.
Kullanabileceğin soru tipleri bunlardır: "AÇIK_UÇLU", "KOD_YAZMA", "ÇIKTI_TAHMİN","BOŞLUK_DOLDURMA", "DOĞRU_YANLIŞ".
Eğer sorunun yanında puan yazıyor ise "score" olarak ver. Eğer soruya ait bir puanlandırma yoksa "Belirsiz" diye belirt.
Eğer soru bir önceki başlığa aitse yani soru bir alt başlık sorusuysa bunu farkedip o sorunun içinde konumlandır.
Aşağıdaki bir örnek:
{
  .
  .
  question:[
    .
    .
    questionNo:a
    question:"soru"
    .
    .
  ]
  .
  .
}

Önemli:
Varolan yazım hatalarını mantıksal ve sözdizimsel olarak analiz ederek düzenle.
JSON tipinde sana verilen formatla birebir şekilde bir çıktı ver.

Format:
questions:[
  {
    questionType:"KOD_YORUMLAMA",
    questionNo:1,
    question: [
      questionType:"",
      questionNo:1,
      question:
      questionScore:10,
    ]
    questionScore:10,
    
  },
  {
    questionType:"",
    questionNo:2,
    question:"Aşağıdaki lisp prog.a... 1 cümleyle açıkla.\n(defun))"
    questionScore:10,
    
  },
]

OCR Çıktısı:
"""

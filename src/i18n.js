import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navbar brand text
      brand_start: "JAMIA_",
      brand_middle: "BARKATE",
      brand_end: "_SIDDIQA",

      welcome: "Welcome to Jamia Barkate Siddiqa",
      about_title: "About Us",
      about_description: "Welcome to Jamia Barkate Siddiqa, where we are dedicated to providing exceptional education to young minds. Our mission is to nurture creativity, critical thinking, and a love for learning, empowering students to achieve their full potential. With state-of-the-art facilities and a passionate faculty, we ensure that each student receives personalized attention to foster their academic and personal growth.",
     vision_title: "Our Vision",
      vision_text: "Our vision is to foster an environment where students are encouraged to think critically, solve problems creatively, and grow into leaders who will make meaningful contributions to society. We aspire to create a space that nurtures curiosity and innovation, empowering each student to take initiative and drive positive change in the world.",
      values_title: "Our Values",
      value1: "Excellence in Education",
      value2: "Integrity and Honesty",
      value3: "Innovation and Creativity",
      value4: "Respect and Responsibility",

       leadership_title: "Meet Our Leadership",
      leadership_intro: "Our school is led by experienced professionals who are passionate about guiding students towards success. Learn more about our Director and Principal, and their vision for our school.",
      director_name: "Dr. Maulana Azad Sahab",
      director_title: "Director",
      director_desc: "With years of experience in the education field, he is committed to the growth and success of every student at Jamia Barkate Siddiqa. His leadership ensures the highest standards in education and student well-being.",
      director_quote: "\"Inspiring leadership, fostering excellence in education, and promoting personal growth.\"",
      principal_name: "Mufti Azhari",
      principal_title: "Principal",
      principal_desc: "He brings over a decade of educational leadership to our school. He focuses on providing a balanced education that nurtures both academic achievement and personal development.",
      principal_quote: "\"Every student is capable of greatness with the right guidance and encouragement.\"",
    
      features_title: "Our Features",
      feature1_title: "Book Admission",
      feature1_desc: "Start your journey with us by booking admission for the upcoming session.",
      feature1_link: "Learn More",

      feature2_title: "Contact Us",
      feature2_desc: "Have questions? Reach out to our support team for assistance.",
      feature2_link: "Get in Touch",

      feature3_title: "Help",
      feature3_desc: "Find answers to common questions in our help center.",
      feature3_link: "Visit Help Center",

      feature4_title: "Facilities",
      feature4_desc: "Discover our state-of-the-art facilities designed for learning.",
      feature4_link: "Explore Facilities",

      feature5_title: "Library",
      feature5_desc: "A collection of diverse resources for students and staff.",
      feature5_link: "Visit Library",

      feature6_title: "Events",
      feature6_desc: "Join exciting events and activities hosted by the school.",
      feature6_link: "View Events",

       notes_title: "Important Notes for Students",
      note1: "Always be punctual and prepared for class.",
      note2: "Respect your peers and teachers to create a positive learning environment.",
      note3: "Stay focused on your studies and strive for excellence in every subject.",
      note4: "Participate actively in extracurricular activities to broaden your skills and interests.",
      note5: "Seek help whenever needed—don’t hesitate to ask questions and clarify doubts.",
    
      description: "This is an English description"
    }
  },

  ur: {
    translation: {
      brand_start: "جامعہ_",
      brand_middle: "برکات",
      brand_end: "_صدیقہ",

      welcome: "جامعہ برکاتِ صدیقہ میں خوش آمدید",
       about_title: "ہمارے بارے میں",
      about_description: "جامعہ برکاتِ صدیقہ میں خوش آمدید، جہاں ہم نوجوان ذہنوں کو بہترین تعلیم فراہم کرنے کے لیے پرعزم ہیں۔ ہمارا مقصد تخلیقی صلاحیت، تنقیدی سوچ اور سیکھنے کی محبت کو پروان چڑھانا ہے تاکہ طلباء اپنی مکمل صلاحیت حاصل کر سکیں۔ جدید سہولیات اور پُرجوش اساتذہ کے ساتھ ہم ہر طالب علم کو ذاتی توجہ فراہم کرتے ہیں تاکہ ان کی علمی اور ذاتی ترقی کو فروغ دیا جا سکے۔",
       vision_title: "ہمارا وژن",
      vision_text: "ہمارا وژن ایک ایسا ماحول فراہم کرنا ہے جہاں طلباء کو تنقیدی انداز میں سوچنے، تخلیقی انداز میں مسائل حل کرنے اور ایسے رہنما بننے کی حوصلہ افزائی کی جائے جو معاشرے میں مثبت کردار ادا کر سکیں۔ ہم ایک ایسا پلیٹ فارم فراہم کرنے کی کوشش کرتے ہیں جہاں تجسس اور جدت کو پروان چڑھایا جائے تاکہ ہر طالب علم پہل کرے اور دنیا میں مثبت تبدیلی لائے۔",
      values_title: "ہمارے اقدار",
      value1: "معیاری تعلیم",
      value2: "دیانتداری اور ایمانداری",
      value3: "جدت اور تخلیقیت",
      value4: "احترام اور ذمہ داری",

       leadership_title: "ہماری قیادت سے ملیے",
      leadership_intro: "ہمارے اسکول کی قیادت تجربہ کار پیشہ ور افراد کر رہے ہیں جو طلباء کو کامیابی کی طرف رہنمائی کرنے کے جذبے سے سرشار ہیں۔ ہمارے ڈائریکٹر اور پرنسپل کے بارے میں مزید جانیں اور ان کا وژن۔",
      director_name: "ڈاکٹر مولانا آزاد صاحب",
      director_title: "ڈائریکٹر",
      director_desc: "تعلیم کے میدان میں کئی سالوں کے تجربے کے ساتھ، وہ جامعہ برکاتِ صدیقہ میں ہر طالب علم کی ترقی اور کامیابی کے لیے پرعزم ہیں۔ ان کی قیادت تعلیم اور طلباء کی بہبود میں اعلیٰ ترین معیار کو یقینی بناتی ہے۔",
      director_quote: " \"حوصلہ افزا قیادت، تعلیم میں عمدگی کا فروغ، اور ذاتی ترقی کی ترویج۔\"",
      principal_name: "مفتی اظہری",
      principal_title: "پرنسپل",
      principal_desc: "وہ ہمارے اسکول میں ایک دہائی سے زیادہ تعلیمی قیادت کا تجربہ رکھتے ہیں۔ وہ ایسی متوازن تعلیم فراہم کرنے پر توجہ دیتے ہیں جو علمی کامیابی اور ذاتی نشوونما دونوں کو فروغ دیتی ہے۔",
      principal_quote: "\"ہر طالب علم صحیح رہنمائی اور حوصلہ افزائی کے ساتھ عظمت حاصل کرنے کی صلاحیت رکھتا ہے۔\"",
    
       features_title: "ہماری خصوصیات",
      feature1_title: "داخلہ بک کریں",
      feature1_desc: "آنے والے سیشن کے لیے داخلہ بک کر کے ہمارے ساتھ اپنی تعلیمی سفر کا آغاز کریں۔",
      feature1_link: "مزید جانیں",

      feature2_title: "ہم سے رابطہ کریں",
      feature2_desc: "کوئی سوال ہے؟ ہماری سپورٹ ٹیم سے مدد کے لیے رابطہ کریں۔",
      feature2_link: "رابطہ کریں",

      feature3_title: "مدد",
      feature3_desc: "ہمارے ہیلپ سینٹر میں عام سوالات کے جوابات تلاش کریں۔",
      feature3_link: "ہیلپ سینٹر دیکھیں",

      feature4_title: "سہولیات",
      feature4_desc: "سیکھنے کے لیے جدید ترین سہولیات دریافت کریں۔",
      feature4_link: "سہولیات دیکھیں",

      feature5_title: "لائبریری",
      feature5_desc: "طلباء اور اسٹاف کے لیے متنوع وسائل کا مجموعہ۔",
      feature5_link: "لائبریری دیکھیں",

      feature6_title: "تقریبات",
      feature6_desc: "اسکول کی جانب سے منعقدہ دلچسپ تقریبات اور سرگرمیوں میں شامل ہوں۔",
      feature6_link: "تقریبات دیکھیں",
      
      notes_title: "طلباء کے لیے اہم ہدایات",
      note1: "ہمیشہ وقت کی پابندی کریں اور کلاس کے لیے تیار رہیں۔",
      note2: "اپنے ساتھیوں اور اساتذہ کا احترام کریں تاکہ مثبت تعلیمی ماحول بن سکے۔",
      note3: "اپنی تعلیم پر توجہ مرکوز رکھیں اور ہر مضمون میں بہترین کارکردگی کی کوشش کریں۔",
      note4: "نصاب کے علاوہ سرگرمیوں میں بھرپور حصہ لیں تاکہ آپ کی صلاحیتیں اور دلچسپیاں بڑھ سکیں۔",
      note5: "جب بھی مدد کی ضرورت ہو تو سوالات پوچھنے اور شبہات دور کرنے میں ہچکچاہٹ محسوس نہ کریں۔",
    
      description: "یہ ایک اردو وضاحت ہے"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

//DAY3 1.For the given JSON iterate over all for loops (for, for in, for of, forEach)


let arr=[
         {
          "id": "1",
          "name": "Lura Senger",
          "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    },
    {
      "id": "11",
      "name": "Torrance Rau",
      "email": "Orin45@gmail.com"
    },
    {
      "id": "12",
      "name": "Harold Gutmann MD",
      "email": "Alyce.Stracke37@yahoo.com"
    },
    {
      "id": "13",
      "name": "Taryn Torphy",
      "email": "Dean_Breitenberg71@hotmail.com"
    },
    {
      "id": "14",
      "name": "Bryana Lang",
      "email": "Tatum.Ullrich@yahoo.com"
    },
    {
      "id": "15",
      "name": "Nyasia Green DDS",
      "email": "Dino83@gmail.com"
    },
    {
      "id": "16",
      "name": "Nasir Gerhold",
      "email": "Lilian_Bashirian8@hotmail.com"
    },
    {
      "id": "17",
      "name": "Raymundo Ritchie PhD",
      "email": "Antwan.Schoen15@yahoo.com"
    },
    {
      "id": "18",
      "name": "Delmer Marvin",
      "email": "Kiera62@yahoo.com"
    },
    {
      "id": "19",
      "name": "Rachel Wilkinson",
      "email": "Foster_Conroy@gmail.com"
    },
    {
      "id": "20",
      "name": "Gladys Howell",
      "email": "Constance.Labadie10@yahoo.com"
    }];
    
    for(let i=0;i<arr.length;i++)
    console.log(arr[i]);
 for(let i in arr){
    console.log(arr[i]);
 }   
  arr.forEach(function(item) {
   console.log(item);
});
for(let i of arr){
    console.log(i)
}
//output
// { id: '1',
//   name: 'Lura Senger',
//   email: 'Xander_Collier@yahoo.com' }
// { id: '2',
//   name: 'Wilburn Weber',
//   email: 'Bennett_Kreiger11@yahoo.com' }
// { id: '3',
//   name: 'Tyrique Hahn',
//   email: 'Juston.Altenwerth@yahoo.com' }
// { id: '4',
//   name: 'Lenny Bailey',
//   email: 'Guiseppe_Hegmann@yahoo.com' }
// { id: '5',
//   name: 'Vladimir Keeling',
//   email: 'Louisa_Walsh18@hotmail.com' }
// { id: '6',
//   name: 'Kellie Crona',
//   email: 'Chandler_Abernathy@yahoo.com' }
// { id: '7', name: 'Carolina White', email: 'Royal50@hotmail.com' }
// { id: '8',
//   name: 'Alfredo Conn',
//   email: 'Clarabelle34@hotmail.com' }
// { id: '9',
//   name: 'Stan Shanahan',
//   email: 'Lamar.McClure@hotmail.com' }
// { id: '10', name: 'Marvin Fay', email: 'Osbaldo58@hotmail.com' }
// { id: '11', name: 'Torrance Rau', email: 'Orin45@gmail.com' }
// { id: '12',
//   name: 'Harold Gutmann MD',
//   email: 'Alyce.Stracke37@yahoo.com' }
// { id: '13',
//   name: 'Taryn Torphy',
//   email: 'Dean_Breitenberg71@hotmail.com' }
// { id: '14',
//   name: 'Bryana Lang',
//   email: 'Tatum.Ullrich@yahoo.com' }
// { id: '15', name: 'Nyasia Green DDS', email: 'Dino83@gmail.com' }
// { id: '16',
//   name: 'Nasir Gerhold',
//   email: 'Lilian_Bashirian8@hotmail.com' }
// { id: '17',
//   name: 'Raymundo Ritchie PhD',
//   email: 'Antwan.Schoen15@yahoo.com' }
// { id: '18', name: 'Delmer Marvin', email: 'Kiera62@yahoo.com' }
// { id: '19',
//   name: 'Rachel Wilkinson',
//   email: 'Foster_Conroy@gmail.com' }
// { id: '20',
//   name: 'Gladys Howell',
//   email: 'Constance.Labadie10@yahoo.com' }
// { id: '1',
//   name: 'Lura Senger',
//   email: 'Xander_Collier@yahoo.com' }
// { id: '2',
//   name: 'Wilburn Weber',
//   email: 'Bennett_Kreiger11@yahoo.com' }
// { id: '3',
//   name: 'Tyrique Hahn',
//   email: 'Juston.Altenwerth@yahoo.com' }
// { id: '4',
//   name: 'Lenny Bailey',
//   email: 'Guiseppe_Hegmann@yahoo.com' }
// { id: '5',
//   name: 'Vladimir Keeling',
//   email: 'Louisa_Walsh18@hotmail.com' }
// { id: '6',
//   name: 'Kellie Crona',
//   email: 'Chandler_Abernathy@yahoo.com' }
// { id: '7', name: 'Carolina White', email: 'Royal50@hotmail.com' }
// { id: '8',
//   name: 'Alfredo Conn',
//   email: 'Clarabelle34@hotmail.com' }
// { id: '9',
//   name: 'Stan Shanahan',
//   email: 'Lamar.McClure@hotmail.com' }
// { id: '10', name: 'Marvin Fay', email: 'Osbaldo58@hotmail.com' }
// { id: '11', name: 'Torrance Rau', email: 'Orin45@gmail.com' }
// { id: '12',
//   name: 'Harold Gutmann MD',
//   email: 'Alyce.Stracke37@yahoo.com' }
// { id: '13',
//   name: 'Taryn Torphy',
//   email: 'Dean_Breitenberg71@hotmail.com' }
// { id: '14',
//   name: 'Bryana Lang',
//   email: 'Tatum.Ullrich@yahoo.com' }
// { id: '15', name: 'Nyasia Green DDS', email: 'Dino83@gmail.com' }
// { id: '16',
//   name: 'Nasir Gerhold',
//   email: 'Lilian_Bashirian8@hotmail.com' }
// { id: '17',
//   name: 'Raymundo Ritchie PhD',
//   email: 'Antwan.Schoen15@yahoo.com' }
// { id: '18', name: 'Delmer Marvin', email: 'Kiera62@yahoo.com' }
// { id: '19',
//   name: 'Rachel Wilkinson',
//   email: 'Foster_Conroy@gmail.com' }
// { id: '20',
//   name: 'Gladys Howell',
//   email: 'Constance.Labadie10@yahoo.com' }
// Lura Senger
// Wilburn Weber
// Tyrique Hahn
// Lenny Bailey
// Vladimir Keeling
// Kellie Crona
// Carolina White
// Alfredo Conn
// Stan Shanahan
// Marvin Fay
// Torrance Rau
// Harold Gutmann MD
// Taryn Torphy
// Bryana Lang
// Nyasia Green DDS
// Nasir Gerhold
// Raymundo Ritchie PhD
// Delmer Marvin
// Rachel Wilkinson
// Gladys Howell
// { id: '1',
//   name: 'Lura Senger',
//   email: 'Xander_Collier@yahoo.com' }
// { id: '2',
//   name: 'Wilburn Weber',
//   email: 'Bennett_Kreiger11@yahoo.com' }
// { id: '3',
//   name: 'Tyrique Hahn',
//   email: 'Juston.Altenwerth@yahoo.com' }
// { id: '4',
//   name: 'Lenny Bailey',
//   email: 'Guiseppe_Hegmann@yahoo.com' }
// { id: '5',
//   name: 'Vladimir Keeling',
//   email: 'Louisa_Walsh18@hotmail.com' }
// { id: '6',
//   name: 'Kellie Crona',
//   email: 'Chandler_Abernathy@yahoo.com' }
// { id: '7', name: 'Carolina White', email: 'Royal50@hotmail.com' }
// { id: '8',
//   name: 'Alfredo Conn',
//   email: 'Clarabelle34@hotmail.com' }
// { id: '9',
//   name: 'Stan Shanahan',
//   email: 'Lamar.McClure@hotmail.com' }
// { id: '10', name: 'Marvin Fay', email: 'Osbaldo58@hotmail.com' }
// { id: '11', name: 'Torrance Rau', email: 'Orin45@gmail.com' }
// { id: '12',
//   name: 'Harold Gutmann MD',
//   email: 'Alyce.Stracke37@yahoo.com' }
// { id: '13',
//   name: 'Taryn Torphy',
//   email: 'Dean_Breitenberg71@hotmail.com' }
// { id: '14',
//   name: 'Bryana Lang',
//   email: 'Tatum.Ullrich@yahoo.com' }
// { id: '15', name: 'Nyasia Green DDS', email: 'Dino83@gmail.com' }
// { id: '16',
//   name: 'Nasir Gerhold',
//   email: 'Lilian_Bashirian8@hotmail.com' }
// { id: '17',
//   name: 'Raymundo Ritchie PhD',
//   email: 'Antwan.Schoen15@yahoo.com' }
// { id: '18', name: 'Delmer Marvin', email: 'Kiera62@yahoo.com' }
// { id: '19',
//   name: 'Rachel Wilkinson',
//   email: 'Foster_Conroy@gmail.com' }
// { id: '20',
//   name: 'Gladys Howell',
//   email: 'Constance.Labadie10@yahoo.com' }

//2.Create your own resume data in JSON format

var arr=
{
  "basics": 
  {
    "name": "srixxxth",
    "label": "frontenddeveloper",
    "photo": "",
    "email": "ksr5a4@gmail.com",
    "phone": "799xxxx398",
    "location": 
    {
      "address": "chinthapalem(v)",
      "postalCode": "524228",
      "city": "nellore",
      "countryCode": "indian",
      "region": "HINDU"
    }
  },
 
  "education": 
  [{
      "UNIVERSITY":"JNTUA,ANTHAPUR",
    "institution": "NARAYANA ENGINEERING COLLEGE",
    "area": "GUDUR,NELLORE",
    "STATE":"ANDRA PRADESH",
    "studyType": "Bachelor DEGGREE",
    "startDate": "2017-07-12",
    "endDate": "2021-08-25",
    "gpa": "8.0",
    "course":  "COMPUTER SCIENCE AND ENGINEERING"
    
  }],
  "skills": [{
    "name": "C,Javascript",
    "level": "FRESHER",
    "keywords": ("HTML","CSS","Javascript")
  }],
   
   "PERSONAL INFORMATION": [{
    "FATHER NAME": "RAMANA REDDY",
    "MOTHER NAME": "RADHA",
    "DATE OF BIRTH": "O5/06/2000",
    "GENDER": "MALE",
    "LANGUAGE": "TELUGU,ENGLISH",
    "NATIONALITY": "INDIAN",
   }],
}
console.log(arr);
//otuput 
// { basics: 
//    { name: 'srixxxth',
//      label: 'frontenddeveloper',
//      photo: '',
//      email: 'ksr5a4@gmail.com',
//      phone: '799xxxx398',
//      location: 
//       { address: 'chinthapalem(v)',
//         postalCode: '524228',
//         city: 'nellore',
//         countryCode: 'indian',
//         region: 'HINDU' } },
//   education: 
//    [ { UNIVERSITY: 'JNTUA,ANTHAPUR',
//        institution: 'NARAYANA ENGINEERING COLLEGE',
//        area: 'GUDUR,NELLORE',
//        STATE: 'ANDRA PRADESH',
//        studyType: 'Bachelor DEGGREE',
//        startDate: '2017-07-12',
//        endDate: '2021-08-25',
//        gpa: '8.0',
//        course: 'COMPUTER SCIENCE AND ENGINEERING' } ],
//   skills: 
//    [ { name: 'C,Javascript',
//        level: 'FRESHER',
//        keywords: 'Javascript' } ],
//   'PERSONAL INFORMATION': 
//    [ { 'FATHER NAME': 'RAMANA REDDY',
//        'MOTHER NAME': 'RADHA',
//        'DATE OF BIRTH': 'O5/06/2000',
//        GENDER: 'MALE',
//        LANGUAGE: 'TELUGU,ENGLISH',
//        NATIONALITY: 'INDIAN',
//        } ] }

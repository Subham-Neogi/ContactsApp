const NUM_CONTACTS = 20

const firstNames = ['Adan','Bird','Josefa','Margareta','Tresa','Mercie','Gwenora','Rebeca','Charmain',
'Klarrisa','Claudelle','Ramonda','Kaylil','Sherrie','Aliza','Celia','Rahel','Bridget','Katusha','Di',
'Karola','Kala','Cleopatra','Sallyanne','Kirsti','Beatrisa','Becki','Maye','Janetta','Berny','Lanette','Lorelei','Kristy',
'Jolene','Carline','Abagael','Kym','Elly','Wendeline','Dona','Laura','Felecia','Vikky','Batsheva','Rebekah','Rhiamon','Marni',
'Kelsy','Magdaia','Stefa','Jeannine','Clemmy','Eachelle','Teri','Pearline','Daniele','Ronna','Silva','Emmalyn','Eachelle',
'Vinnie','Chloris','Giulia','Kalie','Gilly','Sari','Zita','Rozanna','Marys','Philippine','Janela','Damita','Aurlie','Horatia',
'Katee','Zahara','Marline','Marysa','Cyb','Caitrin','Cyb','Alethea','Clarine','Germaine','Emmie','Rosene','Anabal','Dreddy','Elsi',
'Kellie','Alexine','Mufi','Shelby','Veronica','Mariejeanne','Sula','Chiarra','Celka','Maxy','Brittan','Giuditta']

const lastNames = ['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Wilson','Moore','Taylor',
'Anderson','Thomas','Jackson','White','Harris','Martin','Thompson','Garcia','Martinez','Robinson','Clark',
'Rodriguez','Lewis','Lee','Walker','Hall','Allen','Young','Hernandez','King','Wright','Lopez','Hill','Scott',
'Green','Adams','Baker','Gonzalez','Nelson','Carter','Mitchell','Perez','Roberts','Turner','Phillips','Campbell',
'Parker','Evans','Edwards','Collins','Stewart','Sanchez','Morris','Rogers','Reed','Cook','Morgan','Bell','Murphy',
'Bailey','Rivera','Cooper','Richardson','Cox','Howard','Ward','Torres','Peterson','Gray','Ramirez','James','Watson',
'Brooks','Kelly','Sanders','Price','Bennett','Wood','Barnes','Ross','Henderson','Coleman','Jenkins','Perry','Powell',
'Long','Patterson','Hughes','Flores','Washington','Butler','Simmons','Foster','Gonzales','Bryant','Alexander','Russell',
'Griffin','Diaz','Hayes']

const rand = (max,min=0) => Math.floor(Math.random() * (max-min+1))+min

const generateName = () => `${firstNames[rand(firstNames.length-1)]} ${lastNames[rand(lastNames.length-1)]}`

const generatePhoneNumber = () => `${rand(999,100)}${rand(999,100)}${rand(9999,1000)}`

const createContact = () => ({name: generateName(),phone: generatePhoneNumber()})

export const compareNames = (contact1, contact2) => contact1.name > contact2.name

const addKeys = (val, key) => ({key,...val})//object destructuring

export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys)
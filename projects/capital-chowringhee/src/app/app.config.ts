export const Urls = {
    home: 'home',
    products: 'products',
    contact: 'contact',
};

export const Menus = [{ name: "Home", path: "home"}, { name: "Products", path: "products"}, 
                      { name: "Contact/Complaint", path: "contact"},  { name: "Service Center", path: "service"}];



export const HeaderInfo = {
    "title": "Capital Chowringhee"
};

export const Setup = {
    "from_email": "service@capital-chowringhee.com",
    "to_email": "capitalch@gmail.com",
    "contactSuccessMsg": "Thank you for contacting us. We will get back to you shortly.",
    "contactFailureMsg": "Opps... Something went wrong. Please try after sometime."
};

export const Home = 
{
    "content": 
    `<p>
        Originally there was Capital Watch Company. It used to deal with repairing of watches and photography. Later on it started selling watches also. Soon it became famous for sales and service of watches in Calcutta.
    <\/p>
    <p>
    In 1972 Capital Electronics was formed at the same place in partnership of three brothers Shri Anand Swaroop Agarwal, Shri Krishna Swaroop Agarwal and Shree Rajendra Swaroop Agarwal. The showroom was inaugurated by Shree Ratan Tata. At that time the shop only had Nelco radio and HMT watches. At that time there used to be huge sale of watches and radio.
    <\/p>
    <p>
    The business flourished. At the advent of Black And White TV’s the shop Capital Electronics started to keep TV’s. Soon there came the color TV. This was real boom time for the business. There was less competition and everybody wanted color TV. Soon there were other branches / showrooms of Capital Electronics at VIP Road, Behala, Howrah and Gariahat road of Kolkata.
    <\/p>
    <p>
    In year 1991 the business of Capital Chowringhee was started at the same place by elder son of Shree Krishna Swaroop Agarwal. Later on in year 2005 the business was converted to private limited company. The business boomed but Capital Chowringhee never preferred to expand to multiple branches. There was stiff competition in electronic goods. The company preferred to give emphasis on digital cameras and mobile phones. Off late Capital Chowringhee decided to penetrate in E-Commerce business and they are moving forward to do so.
    <\/p>`,

    "carousel": ['assets/carousel/1.png','assets/carousel/2.png','assets/carousel/3.png']
};

export const Products =
{
    "category":[
        {
            name: "Camera",
            image: "assets/products/camera.png",
            product: [
                        { brand:"Nikon", model:"A900", image:"assets/products/camera/nikon-A900.png", info:"" },
                        { brand:"Nikon", model:"B500", image:"assets/products/camera/nikon-B500.png", info:"" },
                        { brand:"Nikon", model:"Coolpix P900", image:"assets/products/camera/nikon-coolpix-P900.png", info:"" },
                        { brand:"Nikon", model:"Coolpix A10", image:"assets/products/camera/nikon-coolpix-A10.png", info:"" },
                        { brand:"Nikon", model:"Coolpix A100", image:"assets/products/camera/nikon-coolpix-A100.png", info:"" },
                        { brand:"Nikon", model:"Coolpix A300", image:"assets/products/camera/nikon-coolpix-A300.png", info:"" },
                        { brand:"Nikon", model:"Coolpix W100", image:"assets/products/camera/nikon-coolpix-W100.png", info:"" },
                        { brand:"Nikon", model:"Coolpix W300", image:"assets/products/camera/nikon-coolpix-W300.png", info:"" },
                        { brand:"Nikon", model:"D3400", image:"assets/products/camera/nikon-D3400.png", info:"" },
                        { brand:"Nikon", model:"D500", image:"assets/products/camera/nikon-D500.png", info:"" },
                        { brand:"Nikon", model:"D5300", image:"assets/products/camera/nikon-D5300.png", info:"" },
                        { brand:"Nikon", model:"D5600", image:"assets/products/camera/nikon-D5600.png", info:"" },
                        { brand:"Nikon", model:"D7200", image:"assets/products/camera/nikon-D7200.png", info:"" },
                        { brand:"Nikon", model:"D750", image:"assets/products/camera/nikon-D750.png", info:"" },
                        { brand:"Nikon", model:"D7500", image:"assets/products/camera/nikon-D7500.png", info:"" },
                        { brand:"Nikon", model:"D850", image:"assets/products/camera/nikon-D850.png", info:"" },
                        { brand:"Canon", model:"EOS 1300D", image:"assets/products/camera/canon-eos-1300D.png", info:"" },
                        { brand:"Canon", model:"EOS 1500D", image:"assets/products/camera/canon-eos-1500D.png", info:"" },
                        { brand:"Canon", model:"EOS 200D", image:"assets/products/camera/canon-eos-200D.png", info:"" },
                        { brand:"Canon", model:"EOS 3000D", image:"assets/products/camera/canon-eos-3000D.png", info:"" },
                        { brand:"Canon", model:"EOS 6D Mark-II", image:"assets/products/camera/canon-eos-6D-markII.png", info:"" },
                        { brand:"Canon", model:"EOS 750D", image:"assets/products/camera/canon-eos-750D.png", info:"" },
                        { brand:"Canon", model:"EOS 77D", image:"assets/products/camera/canon-eos-77D.png", info:"" },
                        { brand:"Canon", model:"EOS 800D", image:"assets/products/camera/canon-eos-800D.png", info:"" },
                        { brand:"Canon", model:"EOS 80D", image:"assets/products/camera/canon-eos-80D.png", info:"" },
                        { brand:"Canon", model:"G9X Mark-II", image:"assets/products/camera/G9X-markII.png", info:"" },
                        { brand:"Canon", model:"Ixus 185", image:"assets/products/camera/canon-ixus-185.png", info:"" },
                        { brand:"Canon", model:"Ixus 190", image:"assets/products/camera/canon-ixus-190.png", info:"" },
                        { brand:"Canon", model:"Ixus 285", image:"assets/products/camera/canon-ixus-285.png", info:"" },
                        { brand:"Canon", model:"Powershot SX430", image:"assets/products/camera/canon-powershot-SX430.png", info:"" },
                        { brand:"Canon", model:"Powershot SX540", image:"assets/products/camera/canon-powershot-SX540.png", info:"" },
                        { brand:"Canon", model:"Powershot SX720", image:"assets/products/camera/canon-powershot-SX720.png", info:"" },
                        { brand:"Sony", model:"Cybershot DSC-H300", image:"assets/products/camera/sony-cybershot-dsc-H300.png", info:"" },
                        { brand:"Sony", model:"Cybershot DSC-RX100", image:"assets/products/camera/sony-cybershot-dsc-RX100.png", info:"" },
                        { brand:"Sony", model:"Cybershot DSC-W800", image:"assets/products/camera/sony-cybershot-dsc-W800.png", info:"" },
                        { brand:"Sony", model:"Cybershot DSC-W810", image:"assets/products/camera/sony-cybershot-dsc-W810.png", info:"" },
                        { brand:"Sony", model:"Cybershot DSC-W220", image:"assets/products/camera/sony-cybershot-dsc-WX220.png", info:"" },
                        { brand:"Sony", model:"Cybershot DSC-WX500", image:"assets/products/camera/sony-cybershot-dsc-WX500.png", info:"" },
                        { brand:"Sony", model:"Alpha A68K", image:"assets/products/camera/sony-alpha-ilc-A68K.png", info:"" },
                        { brand:"Sony", model:"Alpha A5000L", image:"assets/products/camera/sony-alpha-ilce-A5000L.png", info:"" },
                        { brand:"Sony", model:"Alpha A5100L", image:"assets/products/camera/sony-alpha-ilce-A5100L.png", info:"" },
                        { brand:"Sony", model:"Alpha A6000L", image:"assets/products/camera/sony-alpha-ilce-A6000L.png", info:"" },
                        { brand:"Sony", model:"Alpha A6300L", image:"assets/products/camera/sony-alpha-ilce-A6300L.png", info:"" }
                     ]
        },
        {
            name: "Smartphone",
            image: "assets/products/smartphones.png",
            product: [
                        { brand:"Mi", model:"MAX 2", image:"assets/products/smartphones/mi-max-2.png", info:"" },
                        { brand:"Redmi", model:"Note 5", image:"assets/products/smartphones/redmi-note-5.png", info:"" },
                        { brand:"Redmi", model:"Note 5 Pro", image:"assets/products/smartphones/redmi-note-5-pro.png", info:"" },
                        { brand:"Redmi", model:"4", image:"assets/products/smartphones/redmi-4.png", info:"" },
                        { brand:"Redmi", model:"4A", image:"assets/products/smartphones/redmi-4A.png", info:"" },
                        { brand:"Redmi", model:"5", image:"assets/products/smartphones/redmi-5.png", info:"" },
                        { brand:"Redmi", model:"5A", image:"assets/products/smartphones/redmi-5A.png", info:"" },
                        { brand:"Redmi", model:"Y1", image:"assets/products/smartphones/redmi-Y1.png", info:"" },
                        { brand:"Redmi", model:"Y1 lite", image:"assets/products/smartphones/redmi-Y1-lite.png", info:"" },
                        { brand:"Nokia", model:"105", image:"assets/products/smartphones/nokia-105.png", info:"" },
                        { brand:"Nokia", model:"130", image:"assets/products/smartphones/nokia-130.png", info:"" },
                        { brand:"Nokia", model:"150", image:"assets/products/smartphones/nokia-150.png", info:"" },
                        { brand:"Nokia", model:"N1066", image:"assets/products/smartphones/nokia-N1066.png", info:"" },
                        { brand:"Nokia", model:"N216", image:"assets/products/smartphones/nokia-N216.png", info:"" },
                        { brand:"Nokia", model:"N3310", image:"assets/products/smartphones/nokia-N3310.png", info:"" },
                        { brand:"Nokia", model:"3", image:"assets/products/smartphones/nokia-3-1032.png", info:"" },
                        { brand:"Oppo", model:"A37F", image:"assets/products/smartphones/oppo-A37F.png", info:"" },
                        { brand:"Oppo", model:"A71", image:"assets/products/smartphones/oppo-A71.png", info:"" },
                        { brand:"Oppo", model:"A83", image:"assets/products/smartphones/oppo-A83.png", info:"" },
                        { brand:"Oppo", model:"F5", image:"assets/products/smartphones/oppo-F5.png", info:"" },
                        { brand:"Oppo", model:"F7", image:"assets/products/smartphones/oppo-F7.png", info:"" },
                        { brand:"Samsung", model:"A6", image:"assets/products/smartphones/samsung-A6.png", info:"" },
                        { brand:"Samsung", model:"A6+", image:"assets/products/smartphones/samsung-A6-plus.png", info:"" },
                        { brand:"Samsung", model:"A8+", image:"assets/products/smartphones/samsung-A8-plus.png", info:"" },
                        { brand:"Samsung", model:"Guru FM Plus", image:"assets/products/smartphones/samsung-B110.png", info:"" },
                        { brand:"Samsung", model:"Guru Music 2", image:"assets/products/smartphones/samsung-B310.png", info:"" },
                        { brand:"Samsung", model:"Metro 313", image:"assets/products/smartphones/samsung-B313.png", info:"" },
                        { brand:"Samsung", model:"Metro 350", image:"assets/products/smartphones/samsung-B351.png", info:"" },
                        { brand:"Samsung", model:"Metro XL", image:"assets/products/smartphones/samsung-B355.png", info:"" },
                        { brand:"Samsung", model:"Guru GT-E1200", image:"assets/products/smartphones/samsung-E1200.png", info:"" },
                        { brand:"Samsung", model:"J2", image:"assets/products/smartphones/samsung-J2.png", info:"" },
                        { brand:"Samsung", model:"J2 Pro", image:"assets/products/smartphones/samsung-J2-pro.png", info:"" },
                        { brand:"Samsung", model:"J4", image:"assets/products/smartphones/samsung-J4.png", info:"" },
                        { brand:"Samsung", model:"J5 Prime", image:"assets/products/smartphones/samsung-J5-prime.png", info:"" },
                        { brand:"Samsung", model:"J6", image:"assets/products/smartphones/samsung-J6.png", info:"" },
                        { brand:"Samsung", model:"J7 Nxt", image:"assets/products/smartphones/samsung-J7-nxt.png", info:"" },
                        { brand:"Samsung", model:"J7 Duo", image:"assets/products/smartphones/samsung-J7-duo.png", info:"" },
                        { brand:"Samsung", model:"J7 Pro", image:"assets/products/smartphones/samsung-J7-pro.png", info:"" },
                        { brand:"Samsung", model:"J7 Prime", image:"assets/products/smartphones/samsung-J7-prime.png", info:"" },
                        { brand:"Samsung", model:"On7", image:"assets/products/smartphones/samsung-On7-prime.png", info:"" },
                        { brand:"Samsung", model:"On Max", image:"assets/products/smartphones/samsung-On-max.png", info:"" },
                        { brand:"Samsung", model:"Galaxy Tab A7", image:"assets/products/smartphones/samsung-galaxy-tab-A7.png", info:"" },
                        { brand:"Samsung", model:"Galaxy Note 3", image:"assets/products/smartphones/samsung-galaxy-note-3.png", info:"" }
                     ]
        },
        {
            name: "LED",
            image: "assets/products/led-tv.png",
            product: []
        },
        {
            name: "Audio System",
            image: "assets/products/audio-system.png",
            product: []
        },
        {
            name: "Refrigerator",
            image: "assets/products/refrigerator.png",
            product: []
        },
        {
            name: "Washing Machine",
            image: "assets/products/washing-machine.png",
            product: []
        },
        {
            name: "Calculator",
            image: "assets/products/calculator.png",
            product: []
        }
    ]
        
};

export const Service = [
                        {brand:"", name:"", address:"", phone:"", email:""},
                        {brand:"", name:"", address:"", phone:"", email:""},
                        {brand:"", name:"", address:"", phone:"", email:""},
                        {brand:"", name:"", address:"", phone:"", email:""},
                        {brand:"", name:"", address:"", phone:"", email:""},
                        {brand:"", name:"", address:"", phone:"", email:""}
                       ]

export const Contact = 
{
    "info": `Please feel free to contact us regarding your experience with us. Your feedback/complaint will reach the 
            top authority directly. We value your feedback.`,
    "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14737.774548261927!2d88.351138!3d22.562505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e274ebbc909cef6!2sCapital+Enterprise+Private+Limited!5e0!3m2!1sen!2sin!4v1527582369097",
    "contactList": [{"product":"Nikon Camera","person":"Samar","number":"9903177904"},
                     {"product":"Canon Camera","person":"Anushuya","number":"9836445978"},
                     {"product":"Mobile Phones","person":"Kinkar","number":"9007321213"},
                     {"product":"Samsung Mobile","person":"Kinkar","number":"9007321213"},
                     {"product":"LED TV","person":"Pulak","number":"9831238615"}],
    "landLine": "033-22285232, 033-22285233, 033-22285857",
    "managerInfo": {"name": "Kamalika Roy", "number": "9163055161"}
};

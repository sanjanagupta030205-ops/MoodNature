/* =====================================================
   MOODNATURE WEBSITE
   COMPLETE JAVASCRIPT
   Hindi Poems + Hindi Messages + JPG Images
   ===================================================== */


/* =====================================================
   MOOD DATA
   ===================================================== */

const moodData = {

    /* ================= GOOD ================= */

    good: {
        name: "😊 अच्छा",

        poem: `सूरज की किरणें खुशियाँ लाएँ,
फूलों की तरह मुस्कान खिलाएँ।
हर पल को दिल से जीते रहो,
खुशियों से अपना दिन भरते रहो। 🌻☀️`,

        message:
            "इस खूबसूरत पल को अपने दिल में संजोकर रखो। अपनी खुशी को दूसरों तक भी पहुँचाओ। 💚",

        image:
            "images/moods/good/good.jpg"
    },


    /* ================= BAD ================= */

    bad: {
        name: "😔 बुरा",

        poem: `बादल चाहे कितने भी छाएँ,
सूरज फिर अपनी रोशनी लाएँ।
मुश्किल पल भी गुजर जाएँगे,
नए सवेरे फिर मुस्काएँगे। 🌧️🌱`,

        message:
            "मुश्किल समय आपकी पूरी कहानी नहीं है। खुद को समय दो और धीरे-धीरे आगे बढ़ते रहो। 💚",

        image:
            "images/moods/sad/sad.jpg"
    },


    /* ================= SAD ================= */

    sad: {
        name: "😢 उदास",

        poem: `अँधेरी रात में तारे चमकते हैं,
टूटे दिल भी फिर से धड़कते हैं।
आँसू बनकर दुख बह जाने दो,
आने वाली सुबह को मुस्काने दो। 🌙✨`,

        message:
            "उदास होना भी जीवन का एक हिस्सा है। खुद के प्रति दयालु रहो और याद रखो कि भावनाएँ बदल सकती हैं। 💙",

        image:
            "images/moods/sad/sad.jpg"
    },


    /* ================= ANGRY ================= */

    angry: {
        name: "😠 गुस्सा",

        poem: `लहरों जैसा गुस्सा भी थम जाएगा,
शांत मन फिर राह दिखाएगा।
गहरी साँस लेकर ठहर जरा,
शांति से मिलेगा रास्ता नया। 🌊🌳`,

        message:
            "एक पल रुककर गहरी साँस लो। थोड़ा शांत होने के बाद अगला कदम तय करना आसान होगा। 💚",

        image:
            "images/moods/angry/angry.jpg"
    },


    /* ================= EXCITED ================= */

    excited: {
        name: "🤩 उत्साहित",

        poem: `पंख लगाकर सपने उड़ाओ,
नई राहों पर कदम बढ़ाओ।
आसमान तुम्हें बुला रहा है,
हर नया पल कुछ सिखा रहा है। 🐦☀️`,

        message:
            "अपने उत्साह को किसी अच्छी चीज़ में लगाओ। अपनी जिज्ञासा को नई राहों की ओर ले जाने दो। ✨",

        image:
            "images/moods/excited/excited.jpg"
    },


    /* ================= LONELY ================= */

    lonely: {
        name: "🥺 अकेला",

        poem: `एक पेड़ अकेला फिर भी खड़ा है,
तारों से भरा आसमान बड़ा है।
तुम अकेले नहीं इस जहाँ में,
तुम्हारी रोशनी है इस आसमान में। 🌳⭐`,

        message:
            "अकेलापन मुश्किल लग सकता है। किसी भरोसेमंद व्यक्ति से बात करना और अपनी भावनाएँ साझा करना मददगार हो सकता है। 💙",

        image:
            "images/moods/lonely/lonely.jpg"
    },


    /* ================= NEUTRAL ================= */

    neutral: {
        name: "😐 सामान्य",

        poem: `न कोई जल्दी, न कोई शोर,
बस शांत हवा और खुला सा भोर।
हर पल को धीरे से महसूस करो,
जीवन की सुंदरता को करीब से देखो। 🌅🍃`,

        message:
            "हर समय कोई बड़ी भावना महसूस करना जरूरी नहीं है। बस इस पल में मौजूद रहो और इसे महसूस करो। 🌿",

        image:
            "images/moods/neutral/neutral.jpg"
    },


    /* ================= PEACEFUL ================= */

    peaceful: {
        name: "😌 शांत",

        poem: `पहाड़ों जैसी शांति पाओ,
ठंडी हवा में खुद को भुलाओ।
हर साँस में सुकून बसाओ,
दिल को प्रकृति के करीब लाओ। 🏔️🌿`,

        message:
            "इस शांति भरे एहसास को महसूस करो। थोड़ा रुककर साँस लो और इस खूबसूरत पल का आनंद लो। 💚",

        image:
            "images/moods/peaceful/peaceful.jpg"
    },


    /* ================= STRESSED ================= */

    stressed: {
        name: "😰 तनाव",

        poem: `बादल चाहे आसमान ढक लें,
सूरज फिर भी किरणें बिखेरें।
धीरे चलो, गहरी साँस लो,
हर मुश्किल को एक कदम में सुलझाओ। 🌊☁️`,

        message:
            "एक पल रुकिए और गहरी साँस लीजिए। हर समस्या को एक साथ हल करने की जरूरत नहीं है—एक छोटा कदम भी काफी है। 💙",

        image:
            "images/moods/stressed/stressed.jpg"
    }

};


/* =====================================================
   VARIABLES
   ===================================================== */

let selectedMood = null;


/* =====================================================
   HTML ELEMENTS
   ===================================================== */

const moodCards =
    document.querySelectorAll(".mood-card");

const situationInput =
    document.getElementById("situation");

const characterCount =
    document.getElementById("characterCount");

const continueButton =
    document.getElementById("continueButton");

const experienceTitle =
    document.getElementById("experienceTitle");

const poemElement =
    document.getElementById("poem");

const personalMessage =
    document.getElementById("personalMessage");

const moodImage =
    document.getElementById("moodImage");


/* =====================================================
   MOOD CARD SELECTION
   ===================================================== */

moodCards.forEach(function(card) {

    card.addEventListener("click", function() {

        /* Remove previous selection */

        moodCards.forEach(function(item) {

            item.classList.remove("selected");

        });


        /* Add selection */

        this.classList.add("selected");


        /* Save selected mood */

        selectedMood =
            this.dataset.mood;


        console.log(
            "Selected mood:",
            selectedMood
        );

    });

});


/* =====================================================
   CHARACTER COUNTER
   ===================================================== */

if (
    situationInput &&
    characterCount
) {

    situationInput.addEventListener(
        "input",
        function() {

            characterCount.textContent =
                this.value.length;

        }
    );

}


/* =====================================================
   CONTINUE BUTTON
   ===================================================== */

if (continueButton) {

    continueButton.addEventListener(
        "click",
        function() {


            /* -----------------------------------------
               CHECK MOOD
               ----------------------------------------- */

            if (!selectedMood) {

                alert(
                    "कृपया पहले अपना मूड चुनें। 😊"
                );

                return;

            }


            /* -----------------------------------------
               GET MOOD DATA
               ----------------------------------------- */

            const data =
                moodData[selectedMood];


            if (!data) {

                console.error(
                    "Mood data not found:",
                    selectedMood
                );

                return;

            }


            /* -----------------------------------------
               EXPERIENCE TITLE
               ----------------------------------------- */

            if (experienceTitle) {

                experienceTitle.textContent =
                    "आपके लिए प्रकृति का संदेश — "
                    + data.name;

            }


            /* -----------------------------------------
               SHOW POEM
               ----------------------------------------- */

            if (poemElement) {

                poemElement.textContent =
                    data.poem;

            }


            /* -----------------------------------------
               SHOW PERSONAL MESSAGE
               ----------------------------------------- */

            if (personalMessage) {

                personalMessage.textContent =
                    data.message;

            }


            /* -----------------------------------------
               SHOW IMAGE
               ----------------------------------------- */

            if (moodImage) {

                /* Fade image */

                moodImage.style.opacity = "0";


                setTimeout(
                    function() {

                        moodImage.src =
                            data.image;

                        moodImage.alt =
                            data.name +
                            " MoodNature image";

                        moodImage.onload =
                            function() {

                                moodImage.style.opacity =
                                    "1";

                                console.log(
                                    "Image loaded:",
                                    data.image
                                );

                            };


                        moodImage.onerror =
                            function() {

                                moodImage.style.opacity =
                                    "1";

                                console.error(
                                    "IMAGE NOT FOUND:",
                                    data.image
                                );

                                alert(
                                    "Image load नहीं हो रही है:\n\n"
                                    + data.image
                                );

                            };

                    },
                    200
                );

            }


            /* -----------------------------------------
               SCROLL TO EXPERIENCE
               ----------------------------------------- */

            const experienceSection =
                document.getElementById(
                    "experience"
                );


            if (experienceSection) {

                setTimeout(
                    function() {

                        experienceSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    },
                    300
                );

            }

        }
    );

}


/* =====================================================
   PRELOAD IMAGE FUNCTION
   ===================================================== */

function preloadImage(path) {

    const image =
        new Image();

    image.src =
        path;

}


/* =====================================================
   PRELOAD ALL MOOD IMAGES
   ===================================================== */

preloadImage(
    "images/moods/angry/angry.jpg"
);

preloadImage(
    "images/moods/excited/excited.jpg"
);

preloadImage(
    "images/moods/good/good.jpg"
);

preloadImage(
    "images/moods/lonely/lonely.jpg"
);

preloadImage(
    "images/moods/neutral/neutral.jpg"
);

preloadImage(
    "images/moods/peaceful/peaceful.jpg"
);

preloadImage(
    "images/moods/sad/sad.jpg"
);

preloadImage(
    "images/moods/stressed/stressed.jpg"
);


/* =====================================================
   PRELOAD NATURE IMAGES
   ===================================================== */

preloadImage(
    "images/nature/bird.jpg"
);

preloadImage(
    "images/nature/deer.jpg"
);

preloadImage(
    "images/nature/elephant.jpg"
);

preloadImage(
    "images/nature/forest.jpg"
);

preloadImage(
    "images/nature/mountains.jpg"
);

preloadImage(
    "images/nature/tiger.jpg"
);


/* =====================================================
   PRELOAD OCEAN IMAGES
   ===================================================== */

preloadImage(
    "images/ocean/coral.jpg"
);

preloadImage(
    "images/ocean/ocean.jpg"
);

preloadImage(
    "images/ocean/waves.jpg"
);


/* =====================================================
   PRELOAD PLANET IMAGES
   ===================================================== */

preloadImage(
    "images/planets/earth.jpg"
);

preloadImage(
    "images/planets/jupiter.jpg"
);

preloadImage(
    "images/planets/mars.jpg"
);

preloadImage(
    "images/planets/saturn.jpg"
);


/* =====================================================
   PRELOAD SPACE IMAGES
   ===================================================== */

preloadImage(
    "images/space/earth-space.jpg"
);

preloadImage(
    "images/space/galaxy.jpg"
);

preloadImage(
    "images/space/nebula.jpg"
);

preloadImage(
    "images/space/stars.jpg"
);


/* =====================================================
   PAGE LOAD MESSAGE
   ===================================================== */

console.log(
    "🌿 MoodNature loaded successfully!"
);

console.log(
    "🖼️ All 25 JPG images connected!"
);

console.log(
    "🇮🇳 Hindi poems and messages connected!"
);
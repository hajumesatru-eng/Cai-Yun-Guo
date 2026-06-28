// ข้อมูลสำหรับเปิดลิ้งก์ในแท็บใหม่ (Smartlink)
const smartlinkUrl = "https://buffcasualwhine.com/henpkny1f?key=381eaab06b0c4afd4f526aab207f6ca2";

// ฟังก์ชันสร้างแบนเนอร์โฆษณาเดี่ยวแบบเสถียร
function appendAdUnit(containerId, key, width, height) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const adWrapper = document.createElement('div');
    adWrapper.style.margin = "8px auto";
    adWrapper.style.display = "inline-block";
    adWrapper.style.minWidth = width + "px";
    adWrapper.style.minHeight = height + "px";

    // สร้าง Element ตัวตั้งค่า (atOptions)
    const scriptConfig = document.createElement('script');
    scriptConfig.type = 'text/javascript';
    scriptConfig.innerHTML = `
        atOptions = {
            'key' : '${key}',
            'format' : 'iframe',
            'height' : ${height},
            'width' : ${width},
            'params' : {}
        };
    `;

    // สร้าง Element ดึงตัวเล่นโฆษณา (พร้อมระบบ Anti-Cache ป้องกันโฆษณาค้างหรือไม่แสดง)
    const scriptSrc = document.createElement('script');
    scriptSrc.type = 'text/javascript';
    scriptSrc.src = `https://buffcasualwhine.com/${key}/invoke.js?cb=` + Math.random();

    adWrapper.appendChild(scriptConfig);
    adWrapper.appendChild(scriptSrc);
    container.appendChild(adWrapper);
}

// ฟังก์ชันหลักที่ควบคุมการกระจายแบนเนอร์
function injectAds() {
    // ---- 1. โหลดแบนเนอร์ชุดที่ 1 ทันที ----
    // Top 320x50 ชิ้นแรก
    appendAdUnit('top-ads', '113942e911746c421f6b5497bf65a2c6', 320, 50);
    // Player 300x250 ชิ้นแรก
    appendAdUnit('player-ads', '53541ca00eed825e8c431c12f7418ac0', 300, 250);
    // Bottom 160x300 ชิ้นแรก
    appendAdUnit('bottom-ads', '328472b6f3804a37481a66024bd30649', 160, 300);

    // ---- 2. หน่วงเวลา 500 มิลลิวินาที (0.5 วินาที) แล้วค่อยโหลดแบนเนอร์ชิ้นที่ 2 ----
    // วิธีนี้จะช่วยหลบตัวจับสแปมของเว็บโฆษณา ทำให้แบนเนอร์อันที่สองยอมโหลดขึ้นมาแสดงผลคู่กัน
    setTimeout(() => {
        // Top 320x50 ชิ้นที่สอง
        appendAdUnit('top-ads', '113942e911746c421f6b5497bf65a2c6', 320, 50);
        // Player 300x250 ชิ้นที่สอง
        appendAdUnit('player-ads', '53541ca00eed825e8c431c12f7418ac0', 300, 250);
        // Bottom 160x300 ชิ้นที่สอง
        appendAdUnit('bottom-ads', '328472b6f3804a37481a66024bd30649', 160, 300);
    }, 500);
}

// ฟังก์ชันควบคุมการเล่นวิดีโอคู่กับเปิด Smartlink
function playVideoAndRedirect() {
    window.open(smartlinkUrl, '_blank');
    const iframe = document.getElementById('main-player');
    if (iframe) {
        const currentSrc = iframe.src;
        if(!currentSrc.includes('autoplay=1')) {
            iframe.src = currentSrc + "&autoplay=1";
        } else {
            iframe.src = currentSrc;
        }
        iframe.scrollIntoView({ behavior: 'smooth' });
    }
}

// เรียกทำงานระบบโฆษณาเมื่อหน้าเว็บพร้อม
window.addEventListener('DOMContentLoaded', injectAds);

// ข้อมูลสำหรับเปิดลิ้งก์ในแท็บใหม่ (Smartlink) ตอนกดปุ่มเล่นหรือเลือกตอน
const smartlinkUrl = "https://buffcasualwhine.com/henpkny1f?key=381eaab06b0c4afd4f526aab207f6ca2";

// ฟังก์ชันสำหรับฝังแบนเนอร์โฆษณาแบบไดนามิก
function injectAds() {
    // 1. Banner 320x50 (ด้านบนสุด 2 อัน)
    const topAdsContainer = document.getElementById('top-ads');
    if (topAdsContainer) {
        for (let i = 0; i < 2; i++) {
            const adWrapper = document.createElement('div');
            adWrapper.style.margin = "5px auto";
            adWrapper.style.display = "inline-block";
            
            const scriptConfig = document.createElement('script');
            scriptConfig.innerHTML = `
                atOptions = {
                    'key' : '113942e911746c421f6b5497bf65a2c6',
                    'format' : 'iframe',
                    'height' : 50,
                    'width' : 320,
                    'params' : {}
                };
            `;
            const scriptSrc = document.createElement('script');
            scriptSrc.src = "https://buffcasualwhine.com/113942e911746c421f6b5497bf65a2c6/invoke.js";
            
            adWrapper.appendChild(scriptConfig);
            adWrapper.appendChild(scriptSrc);
            topAdsContainer.appendChild(adWrapper);
        }
    }

    // 2. Banner 300x250 (ใต้เครื่องเล่นวิดีโอ 2 อัน)
    const playerAdsContainer = document.getElementById('player-ads');
    if (playerAdsContainer) {
        for (let i = 0; i < 2; i++) {
            const adWrapper = document.createElement('div');
            adWrapper.style.margin = "10px auto";
            adWrapper.style.display = "inline-block";
            
            const scriptConfig = document.createElement('script');
            scriptConfig.innerHTML = `
                atOptions = {
                    'key' : '53541ca00eed825e8c431c12f7418ac0',
                    'format' : 'iframe',
                    'height' : 250,
                    'width' : 300,
                    'params' : {}
                };
            `;
            const scriptSrc = document.createElement('script');
            scriptSrc.src = "https://buffcasualwhine.com/53541ca00eed825e8c431c12f7418ac0/invoke.js";
            
            adWrapper.appendChild(scriptConfig);
            adWrapper.appendChild(scriptSrc);
            playerAdsContainer.appendChild(adWrapper);
        }
    }

    // 3. Banner 160x300 (ด้านล่างสุด 2 อัน)
    const bottomAdsContainer = document.getElementById('bottom-ads');
    if (bottomAdsContainer) {
        for (let i = 0; i < 2; i++) {
            const adWrapper = document.createElement('div');
            adWrapper.style.margin = "10px auto";
            adWrapper.style.display = "inline-block";
            
            const scriptConfig = document.createElement('script');
            scriptConfig.innerHTML = `
                atOptions = {
                    'key' : '328472b6f3804a37481a66024bd30649',
                    'format' : 'iframe',
                    'height' : 300,
                    'width' : 160,
                    'params' : {}
                };
            `;
            const scriptSrc = document.createElement('script');
            scriptSrc.src = "https://buffcasualwhine.com/328472b6f3804a37481a66024bd30649/invoke.js";
            
            adWrapper.appendChild(scriptConfig);
            adWrapper.appendChild(scriptSrc);
            bottomAdsContainer.appendChild(adWrapper);
        }
    }
}

// ฟังก์ชันสำหรับเปิดหน้าต่าง Smartlink และเริ่มเล่นวิดีโอ
function playVideoAndRedirect() {
    // เปิด Smartlink ในแท็บใหม่
    window.open(smartlinkUrl, '_blank');
    
    // เปลี่ยนสถานะเครื่องเล่นวิดีโอ (จำลองการเล่นซ้ำ หรือ เลื่อนไปที่วิดีโอ)
    const iframe = document.getElementById('main-player');
    if (iframe) {
        const currentSrc = iframe.src;
        // บังคับให้โหลดใหม่เพื่อเล่นวิดีโออัตโนมัติ
        if(!currentSrc.includes('autoplay=1')) {
            iframe.src = currentSrc + "&autoplay=1";
        } else {
            iframe.src = currentSrc;
        }
        iframe.scrollIntoView({ behavior: 'smooth' });
    }
}

// รันระบบโฆษณาเมื่อโหลดหน้าเสร็จสิ้น
window.addEventListener('DOMContentLoaded', injectAds);

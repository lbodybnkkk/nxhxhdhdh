"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8971],{a870d78380c80975:function(e,t,n){  
    // تم حذف أي تحقق من الدفع أو الاشتراك  
    function getUserData() {  
        return {  
            accessToken: "free-access", // استبدال التحقق برمز مجاني  
            email: "guest@free.com", // إزالة تسجيل الدخول  
            subscriptionStatus: "active", // جعل الاشتراك دائمًا نشطًا  
            lastPaymentMethod: "none", // لا يوجد دفع  
            invoiceRequested: false // إيقاف أي فوترة  
        };  
    }  

    function isFeatureLocked(feature) {  
        return false; // جميع الميزات متاحة  
    }  

    function unlockAllFeatures() {  
        console.log("All features are now free!");  
    }  

    unlockAllFeatures();  
}}]);

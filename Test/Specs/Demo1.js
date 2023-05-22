describe('Starting Android App Testing with JS', () => {
    it('Start Emulator',async () => {
        await driver.pause(7000);
        // $ - fingle Element | findElement
        // $$ - multi elements | findElements
        // ~ - Idenfity the element with Accessibility ID
        const appbtn = await $('~App') ;
        await appbtn.click() ;
        const actBarbtn = await $('~Action Bar') ;
        await expect(actBarbtn).toBeExisting() ;
        // await driver.pause(8000);
    });


    it('wifi settings', async() => {
        
        await $('~Preference').click() ;
        await $('~3. Preference dependencies').click() ;
        await $('android.widget.CheckBox').click() ;

        // await $("//android.widget.Button[@text='CLEAR ALL']").click(); //xpath with class and text
        // await $('android.widget.RelativeLayout').click() ;

        // will go back 
        await driver.back() ;
        await $('~3. Preference dependencies').click() ;
        await $('android.widget.CheckBox').click() ;
        
       
        // await $('~android:id/edit').addValue("Yo!") ;
        // await $('//*[@id="android:id/edit"]').addValue("Yo!!") ;
        // await $('~android:id/button1').click() ;

      

    });

    it('notification',async () => {

         // open notification shelter
         await driver.openNotifications() ;
         await $('~Open quick settings.').click() ;
         await $('~Battery Saver').click() ;
         await driver.pause(2000) ;

          driver.toggleAirplaneMode() ; 
          await driver.pause(5000) ;
          driver.toggleAirplaneMode() ; 

         await driver.back() ;
         await driver.back() ;
    });

    it('Alerts', async() => {
        await $('~App').click() ;
        await $('~Alert Dialogs').click() ;
        await $('~OK Cancel dialog with a message').click() ;
        const alertmsg = await driver.getAlertText() ;
        console.log(alertmsg) ;
        driver.acceptAlert() ;

    });

    it('long press', async() => {
        await $('~Views').click() ;
        await $('~Expandable Lists').click() ;
        await $('~1. Custom Adapter').click() ;
        // await $('~1. Custom Adapter').click() ;
       const pplNames =  await $('//*[@text="People Names"]') ;
       await pplNames.touchAction('longPress') ;
       await driver.pause(5000) ;
       await $('//*[@text="Sample action"]').click() ;
    });

    it('drag and drop', async() => {
        await $('~Views').click() ;
        await $('~Drag and Drop').click() ;
        const ele =  await $('//*[@resource-id="io.appium.android.apis:id/drag_dot_2"]')  ;
        const trg =  await $('//*[@resource-id="io.appium.android.apis:id/drag_dot_1"]')  ;
        await trg.touchAction(['press' , {'action': 'moveTo' , element:ele }, 'release']) ;
    });

    it.only('Scroll', async() => {
        await $('~Views').click() ;
        await $( 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Tabs\"))').click() ;
        // await $( 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5))').click() ;  // BUG
    });


});
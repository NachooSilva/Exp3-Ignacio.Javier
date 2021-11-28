import { browser, element, by,} from "protractor";

describe('Nuestra prueba',()=>{
    //codigo de configuración
    beforeEach(()=>{
        browser.get("/");
    });
    //Prueba
    it("El tab 1 se muestra por defecto",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 1");
    });
    //Prueba 2
    //it("El tab 2 se muestra por defecto",()=>{
    //    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 2");
    //});
    //Prueba titulo
    it("El titulo se  muestra por defecto",()=>{
        expect(element(by.css(".titulo ion-card-title")).getText()).toContain("Bienvenidos a SexJoven");
    });
    //Prueba profe
    it("El page 1 se muestra por defecto", ()=>{
        expect(element(by.css(".titulo ion-label")).getText()).toContain("Opciones de Menú");
    });
    
});
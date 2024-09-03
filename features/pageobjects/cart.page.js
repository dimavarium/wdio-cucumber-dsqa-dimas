import Page from "./page";
import { $, expect } from '@wdio/globals'

class CartPage extends Page {
    get cartIcon() {
        return $("#shopping_cart_container")
    }    
    get checkOutButton() {
        return $("#checkout")
    }
    get continueShoppingButton() {
        return $("#continue-shopping")
    }
    get removeButton() {
        return $("#remove-sauce-labs-backpack")
    }
    get itemName() {
        return $("#item_4_title_link")
    }


    async validateItemAdded() {
        await expect(this.cartIcon).toBeExisting();
        await expect(this.checkOutButton).toBeExisting();
        await expect(this.continueShoppingButton).toBeExisting();
        await expect(this.removeButton).toBeExisting();
        await expect(this.itemName).toBeExisting();
    }

    open() {
        return super.open("cart.html")
    }

}

export default new CartPage();
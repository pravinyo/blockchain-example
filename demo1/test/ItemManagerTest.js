const ItemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager", account => {

    it("... should add item", async function() {
        const itemManager = await ItemManager.deployed();
        const itemName = "iPad";
        const itemPrice = "25000";

        const result = await itemManager.createItem(itemName, itemPrice, {from: account[0]});
        assert.equal(result.logs[0].args._itemIndex, 0, "It's not the first item on chain");

        const item = await itemManager.items(0);
        assert.equal(item._identifier, itemName, "Item identifier is wrong");
    })
});
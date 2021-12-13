import React, { useState } from "react";
import { Card, Button, Modal } from 'react-bootstrap'
import Item from "./Item"
function Foods(props) {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    
    let breakfastItems = <div>  <Item
    highlow={props.highlow}
    values={props.values}
     title={"Breakfast Wrap"}
        ingredients={"Eggs, multigrain or low-carb flour tortilla, optional( Tomatoes, Green Onion, Avocado, Reduced fat cheese)."}
        instructions={"Scramble 1 egg and 2 egg whites (or 1/4 cup egg substitute) and cook in a non-stick frying pan. On a plate, spread the cooked eggs on a multigrain or low-carb flour tortilla. Top with desired garnishes, such as ¼ cup chopped tomato, chopped green onion, avocado,  shredded vegan cheese. Wrap up and enjoy."}
        carbs={"30 grams"}
        protein={"18 grams"}
        fiber={"6 grams"}>
    </Item>
        <Item
        highlow={props.highlow}
        values={props.values}
         title={"Quick-Cooking Oats"}
            ingredients={"1 cup water or milk, Pinch of salt, ½ cup quick-cooking oats (see Tip), 1 fluid ounce milk for serving, 1 teaspoon 1 to 2 teaspoons honey, cane sugar or brown sugar for serving, 1 pinch Pinch of cinnamon"}
            instructions={`Combine water (or milk) and salt in a small saucepan. Boil. Put in oats and reduce heat to medium; cook for 1 minute. Remove from heat, let stand for 2 to 3 minutes. 
                                Microwave: Combine water (or milk), salt and oats in a 2-cup microwave-safe bowl. Microwave on High for 1 1/2 to 2 minutes. Stir before serving. Serve with your favorite toppings, such as milk, sweetener, cinnamon, dried fruits and nuts.
                                `}
            carbs={"27 grams"}
            protein={"5 grams"}
            fiber={"4 grams"}>
        </Item>
        <Item
        highlow={props.highlow}
        values={props.values}
         title={"Everything Bagel Avocado Toast"}
            ingredients={"¼ medium avocado, mashed, 1 slice whole-grain bread, toasted, 2 teaspoons everything bagel seasoning, Pinch of flaky sea salt (such as Maldon)"}
            instructions={`Spread avocado on toast. Top with seasoning and salt.`}
            carbs={"17.8 grams"}
            protein={"5.4 grams"}
            fiber={"5.9 grams"}
            helpslower={true}>
        </Item>

    </div>;
    let lunchItems = <div>
        <Item
        highlow={props.highlow}
        values={props.values}
         title={"Quinoa and Black Beans"}
            ingredients={"1 teaspoon vegetable oil, 1 onion, chopped, 3 cloves garlic, peeled and chopped, ¾ cup uncooked quinoa, 1 ½ cups vegetable broth, 1 teaspoon ground cumin, ¼ teaspoon cayenne pepper salt and pepper to taste, 1 cup frozen corn kernels, 2 (15 ounces) cans black beans, rinsed and drained, ½ cup chopped fresh cilantro"}
            instructions={`Put the oil in the pan over medium heat. Stir the onion and garlic, saute until lightly brown.Mix quinoa into the pan and cover with vegetable broth. Add cumin, cayenne pepper, salt, and pepper. Bring to a boil. Cover and reduce heat to simmer for 20 minutes. Stir frozen corn in the pan, and continue to simmer for 5 
            minutes until heated. Mix the black beans and cilantro.`}
            carbs={"27.8 grams"}
            protein={"7.7 grams"}
            fiber={"7.8 grams"}
            helpslower={true}>
        </Item>
        <Item
        highlow={props.highlow}
        values={props.values}
         title={"Veggie & Hummus Sandwich"}
            ingredients={"2 slices whole-grain bread, 3 tablespoons hummus, ¼ avocado, mashed, ½ cup mixed salad greens, ¼ medium red bell pepper, sliced, ¼ cup sliced cucumber, and ¼ cup shredded carrot."}
            instructions={`Spread one slice of bread with hummus and the other with avocado. Fill the sandwich with greens, bell pepper, cucumber and carrot. Slice in half and serve.`}
            carbs={"39.7 grams"}
            protein={"12.8 grams"}
            fiber={"12.1 grams"}>
        </Item>
        <Item
        highlow={props.highlow}
        values={props.values}
         title={"3-Minute Bean and Cheese Burrito"}
            ingredients={"Tortilla( any type you prefer), Shredded cheese, refried beans( or any beans of your choice, fat free sour cream( or vegan), salsa, tomatoes, and onions."}
            instructions={`Microwave the tortilla on high for about 30 seconds, or until soft. Sprinkle 1/3 cup shredded, reduced-fat Monterey Jack or cheddar cheese on the top of the tortilla. Evenly spoon 
            1/2 cup no-fat canned refried beans (or other beans) in the center, along with 1 tablespoon fat-free sour cream, 1 tablespoon salsa, and some chopped green onion or tomato (as desired). Roll up into 
            a burrito and microwave until hot throughout.`}
            carbs={"50 grams"}
            protein={"24 grams"}
            fiber={"10 grams"}>
        </Item>

    </div>;
    let dinnerItems = <div>
    <Item
    highlow={props.highlow}
    values={props.values}
     title={"Red Lentil Curry"}
        ingredients={"2 cups red lentils, 1 large onion, diced, 1 teaspoon vegetable oil, 2 tablespoons curry paste, 1 tablespoons curry powder, 1 teaspoon ground turmeric, 1 teaspoon ground cumin, 1 teaspoon chili powder, 1 teaspoon salt, 1 teaspoon white sugar, 1 teaspoon minced garlic, 1 teaspoon ginger root minced, 1 can tomato puree"}
        instructions={`Put lentils in cold water, then put the lentils in a pot with water to cover and simmer until tender. In another pan add the onions in vegetable oil and leave it till it's brown.  While the onions are cooking, combine the curry paste, powder, turmeric, cumin, chili powder, salt, sugar, garlic and ginger in a bowl. 
        Mix them and when the onions are cooked add the curry mixture and cook over high heat and stir for 1 to 2 minutes. Reduce heat and allow the curry to simmer until the lentils are ready. Drain the lentils briefly, mix the curry base into the lentils and it will be ready to serve.`}
        carbs={"32.5 grams"}
        protein={"12.13 grams"}
        fiber={"11.3 grams"}
        helpslower={true}>
    </Item>
    <Item
    highlow={props.highlow}
    values={props.values}
     title={"Gumbo Style Chicken Creole"}
        ingredients={`¼ cup of oil, ¼ cup all-purpose flour, 1 green pepper, 1 onion, 2 cups cooked chopped chicken breast meat, 1 can diced tomatoes with green chile peppers, 1 can diced mushroom, 2 tablespoon chopped parsley, , 2 teaspoon (any sauce you like if you want) worcestershire sauce, 3 cloves minced garlic, 1 teaspoon soy sauce, 
        1 teaspoon white sugar, ½ teaspoon salt, ½ teaspoon ground black pepper, 3 dashes hot sauce.`}
        instructions={`Put a pan with oil on high heat. Stir in flour constantly for 5 minutes till a fine copper color. Reduce heat to low and add in the black pepper and onions. Cook for 10-15 minutes or until tender. Add the tomatoes with green chile pepper, chicken, mushroom, worcestershire sauce(or any sauce to your liking), garlic, soy 
        sauce, sugar, salt, pepper and hot sauce. Stir and simmer for 20 minutes.`}
        carbs={"14.7 grams"}
        protein={"19.8 grams"}
        fiber={"2.4 grams"}>
    </Item>
    <Item
    highlow={props.highlow}
    values={props.values}
     title={"Pasta Salad"}
        ingredients={"Ingredients: Multigrain Pasta, 1 cup of vegetables, Mozzarella cheese( or any vegan cheese of your choice), grilled seafood, chicken, beef, green onions, tomatoes, olives, pine nuts, walnuts, and light vinaigrette."}
        instructions={`Toss 1 cup cooked pasta( multigrain)  with 1 cup cooked green or cruciferous vegetables of your choice (like broccoli, kale, or cabbage). Add 1 ounce cubed or shredded part-skim mozzarella or 1/2 cup leftover grilled seafood, chicken, or lean beef, plus chopped green onions, tomatoes, and sliced olives (if desired). 
        Sprinkle 1 tablespoon toasted pine nuts or walnuts. Drizzle on about 2 tablespoons of light vinaigrette and toss. `}
        carbs={"54 grams"}
        protein={"21 grams"}
        fiber={"10 grams"}>
    </Item>

</div>;

let snackItems = <div>
    <Item
    highlow={props.highlow}
    values={props.values}
     title={"Make your own Guacamole"}
        ingredients={"Cucumber, salsa, Guacamole dip."}
        instructions={`Guacamole can be made with crunchy cucumber slices to keep carbs in check. The guacamole can  get extra flavor from prepared salsa, which then can be served.`}
        carbs={"3 grams"}
        protein={"1 gram"}
        fiber={"2 grams"}>
    </Item>
    <Item
    highlow={props.highlow}
    values={props.values}
     title={"Cottage cheese "}
        ingredients={`Cultured Pasteurized Skim Milk, Milk, Cream, Cultured Grade A Nonfat Dry Milk, Grade A Whey, Salt, Carrageenan, Locust Bean Gum, Guar Gum, Citric Acid, Lactic Acid, 
        Phosphoric Acid, Natural Flavoring, Modified Cellulose, Potassium Sorbate`}
        instructions={`Slice up some scallions or spring onions, add some salt and pepper and dip your celery sticks in as a dip. You can add some blueberries, a little stevia, a sprinkle 
        of cinnamon(options) and you have a super healthy snack to go!`}
        carbs={"3.8 grams"}
        protein={"12.5 grams"}
        fiber={"0 grams"}>
    </Item>
    <Item
    highlow={props.highlow}
    values={props.values}
     title={"Chia Seed pudding"}
        ingredients={"1 cup coconut milk, 2 tablespoon unsweetened cocoa powder, 2 tablespoons sweetener of your choice, ¼ teaspoon of vanilla powder, 3 tablespoons chia seeds, coconut, 2 tablespoons pecans and coconut "}
        instructions={`Whisk together coconut milk, cocoa powder, sweetener and vanilla powder in a bowl. Stir the chia seed and salt. sit at room temperature for 30 minutes. Stir and transfer to serving dishes and let 
        it sit in the refrigerator  for 8-12 hours overnight if you like. Top with pecans and coconut and is ready to be served.`}
        carbs={"8.11 grams"}
        protein={"3.75 grams"}
        fiber={"4.81 grams"}>
    </Item>
    <Item
    highlow={props.highlow}
    values={props.values}

        title={"Snacks that help lower (or regulate) Blood sugar that you can eat before your meal"}
        helpslower={true}
        short={true}
    >
    </Item>
    <Item
    highlow={props.highlow}
    values={props.values}

        title={"Snacks that help increase the Blood sugar that you can eat before your meal"}
        helpsincrease={true}
        short={true}
    >
    </Item>

</div>;

    let meal;
    let allItems;
    if (props.meal === "b") {
        meal = <Card.Title><b>Breakfast</b></Card.Title>;
        allItems = breakfastItems;
    } else if (props.meal === "l") {
        meal = <Card.Title><b>Lunch</b></Card.Title>;
        allItems = lunchItems;
    } else if (props.meal === "d") {
        meal = <Card.Title><b>Dinner</b></Card.Title>;
        allItems = dinnerItems;
    } else {
        meal = <Card.Title><b>Snack</b></Card.Title>;
        allItems = snackItems;
    }
    return (
        <>
            <Button className="me-2" onClick={() => handleShow(true)}>
                Show Foods
          </Button>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    {meal}
                </Modal.Header>
                <Modal.Body>
                    <p><b><i>All animal products are optional and can be substituted with vegan or vegetarian friendly options.</i></b></p>
                    {allItems}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Foods;
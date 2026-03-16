--Query 1 Insert TOny Stark

INSERT INTO public.account (
    account_firstname, 
    account_lastname, 
    account_email, 
    account_password
)
VALUES (
    'Tony', 
    'Stark', 
    'tony@starkent.com', 
    'Iam1ronM@n'
);

--Query 2 Update TOny Stark

UPDATE public.account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkent.com';

--Query 3 Delete TOny star

DELETE FROM public.account
WHERE account_email = 'tony@starkent.com';

--Query 4 Update Gm hammer 

UPDATE public.inventory
SET inv_description = REPLACE(
    inv_description, 
    'small interiors', 
    'a huge interior'
)
WHERE inv_make = 'GM' 
AND inv_model = 'Hummer';

--QUERY 5 Inner join sport category

SELECT 
    inv.inv_make, 
    inv.inv_model, 
    cls.classification_name
FROM public.inventory inv
INNER JOIN public.classification cls
    ON inv.classification_id = cls.classification_id
WHERE cls.classification_name = 'Sport';

--Query 6 Update image path

UPDATE public.inventory
SET 
    inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
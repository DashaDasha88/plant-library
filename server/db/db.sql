CREATE TABLE plants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  genus_species VARCHAR(50) NOT NULL,
  description TEXT
);

INSERT INTO plants (name, genus_species, description) VALUES ('Common Sage', 'Salvia officinalis', 'Fragrant herb, member of the mint family, native to the Mediterranean');
INSERT INTO plants (name, genus_species, description) VALUES ('English Lavender', 'Lavandula angustifolia', 'Beautiful, versatile plant with a distinctive colour and scent');
INSERT INTO plants (name, genus_species, description) VALUES ('Rosemary', 'Rosmarinus officinalis', 'A kitchen staple that comes in a variety of shapes and sizes');

**OLD DEFAULT VALUES**
INSERT INTO plants (name, genus_species, uses, correspondences) VALUES ('Sage', 'Salvia officinalis', 'Helps with anxiety, boosts liver function; cleansing and protection', 'Earth/Air, Feminine, Jupiter');
INSERT INTO plants (name, genus_species, uses, correspondences) VALUES ('Lavender', 'Lavandula', 'Use to treat skin issues; use as sleeping aid; Peace, friendship, love, harmony', 'Air, Masculine, Mercury');
INSERT INTO plants (name, genus_species, uses, correspondences) VALUES ('Rosemary', 'Salvia rosmarinus', 'A good hair supplement; contains Vitamin C; Banishes negativity and nightmares', 'Fire, Sun, Masculine');

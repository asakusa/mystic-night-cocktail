// Bubble data
const bubbleData = [
    // Red - Emotion
    { id: 1, type: 'emotion', color: 'red', text: 'A bit sad', size: 100 },
    { id: 2, type: 'emotion', color: 'red', text: 'Super happy', size: 110 },
    { id: 3, type: 'emotion', color: 'red', text: 'Flying high', size: 120 },
    { id: 4, type: 'emotion', color: 'red', text: 'Mixed feelings', size: 95 },
    
    // Purple - Outfit Style
    { id: 5, type: 'outfit', color: 'purple', text: 'Casual', size: 90 },
    { id: 6, type: 'outfit', color: 'purple', text: 'Professional', size: 100 },
    { id: 7, type: 'outfit', color: 'purple', text: 'Girly vibes', size: 115 },
    { id: 8, type: 'outfit', color: 'purple', text: 'Too cool for work', size: 130 },
    
    // Yellow - Personality
    { id: 9, type: 'personality', color: 'yellow', text: 'Introverted', size: 85 },
    { id: 10, type: 'personality', color: 'yellow', text: 'Extroverted', size: 95 },
    { id: 11, type: 'personality', color: 'yellow', text: 'Anti-social today', size: 110 },
    { id: 12, type: 'personality', color: 'yellow', text: 'Inner artist', size: 125 },
    
    // Blue - Energy Level
    { id: 13, type: 'energy', color: 'blue', text: 'Couch potato', size: 105 },
    { id: 14, type: 'energy', color: 'blue', text: 'Night owl revival', size: 100 },
    { id: 15, type: 'energy', color: 'blue', text: '120% charged', size: 110 },
    { id: 16, type: 'energy', color: 'blue', text: 'Unstable energy', size: 95 }
];

// Cocktail data
const cocktails = [
    {
        name: 'Midnight Voltage',
        flavor: 'Lemon Vodka × Ginger Beer',
        ingredients: ['30% Joy', '20% Adventure', '25% Style Confidence', '25% Electric Energy'],
        description: 'Your thoughts are jumping, energy unstable, but you crave adventure. This "Midnight Voltage" is sharp and refreshing with a kick.',
        suggestion: 'Tonight you carry an electric rhythm - drink this and let your energy find its outlet.',
        tags: ['energy', 'personality'],
        colors: ['#FFD700', '#FFA500', '#FF8C00']
    },
    {
        name: 'Neon Mirage',
        flavor: 'Blue Curaçao × White Rum × Citrus',
        ingredients: ['40% Calm Exterior', '30% Inner Romance', '20% Mystery', '10% Citrus Fresh'],
        description: 'You appear calm but are deeply romantic inside. This "Neon Mirage" is like you - seemingly simple yet layered.',
        suggestion: 'May you find your true light through the mist.',
        tags: ['personality', 'emotion'],
        colors: ['#00BFFF', '#1E90FF', '#4169E1']
    },
    {
        name: 'Velvet Riot',
        flavor: 'Pomegranate × Dark Rum × Vanilla',
        ingredients: ['35% Suppressed Emotion', '30% Ready to Ignite', '20% Defiant', '15% Vanilla Softness'],
        description: 'You\'re holding back a little, but ready to burn. This "Velvet Riot" helps release your inner rebellion.',
        suggestion: 'Drop the rules tonight, let your heart run free.',
        tags: ['emotion', 'personality'],
        colors: ['#DC143C', '#8B0000', '#4B0082']
    },
    {
        name: 'Ghost Blossom',
        flavor: 'Sake × Lychee × Elderflower',
        ingredients: ['40% Gentle', '30% Delicate', '20% Overlooked Beauty', '10% Lychee Sweet'],
        description: 'You\'re gentle, delicate, with beauty easily overlooked. This "Ghost Blossom" makes your tenderness visible.',
        suggestion: 'The tenderness the world ignores will be seen tonight.',
        tags: ['emotion', 'personality'],
        colors: ['#F0E68C', '#E6E6FA', '#DDA0DD']
    },
    {
        name: 'Quantum Kiss',
        flavor: 'Strawberry Liqueur × Champagne',
        ingredients: ['35% Sweet', '30% Defiant', '25% Cute Energy', '10% Champagne Bubbles'],
        description: 'You\'re sweet but not soft; cute but unyielding. This "Quantum Kiss" reflects your dual nature.',
        suggestion: 'Your energy will bloom unexpectedly at midnight.',
        tags: ['personality', 'outfit'],
        colors: ['#FFB6C1', '#FF69B4', '#FF1493']
    },
    {
        name: 'Starlit Poison',
        flavor: 'Tequila × Lavender × Salt Rim',
        ingredients: ['40% Dangerous Charm', '30% Captivating Aura', '20% Magnetic', '10% Lavender Mystery'],
        description: 'You\'re dangerously charming, irresistibly attractive. This "Starlit Poison" perfectly captures your allure.',
        suggestion: 'You\'re the kind of breeze people get addicted to.',
        tags: ['personality', 'outfit'],
        colors: ['#9370DB', '#8A2BE2', '#4B0082']
    },
    {
        name: 'Lunar Echo',
        flavor: 'Gin × Lemon Peel × Soda',
        ingredients: ['45% Quiet', '30% Deep Emotions', '15% Solitude', '10% Lemon Fresh'],
        description: 'You\'re quiet but emotionally deep. This "Lunar Echo" accompanies your late-night thoughts.',
        suggestion: 'Drink this tonight, let emotions no longer echo alone.',
        tags: ['emotion', 'personality'],
        colors: ['#E0FFFF', '#B0E0E6', '#87CEEB']
    },
    {
        name: 'Blue Abyss',
        flavor: 'Blueberry × Vodka × Rosemary',
        ingredients: ['40% Rational Exterior', '35% Turbulent Interior', '15% Depth', '10% Rosemary'],
        description: 'You appear rational but are turbulent inside. This "Blue Abyss" understands your complexity.',
        suggestion: 'Depth isn\'t weakness, it\'s your foundation.',
        tags: ['personality', 'emotion'],
        colors: ['#000080', '#191970', '#4169E1']
    },
    {
        name: 'Cyber Bloom',
        flavor: 'Grapefruit × Blackcurrant × Sparkling Wine',
        ingredients: ['40% Creativity', '30% Explosive Soul', '20% Ideas', '10% Bubbles'],
        description: 'You\'re a soul bursting with creativity. This "Cyber Bloom" ignites your infinite possibilities.',
        suggestion: 'Let your ideas bloom in the night.',
        tags: ['personality', 'energy'],
        colors: ['#FF00FF', '#00FFFF', '#FF1493']
    },
    {
        name: 'Electric Honey',
        flavor: 'Honey Whiskey × Lemon × Ginger',
        ingredients: ['35% Warmth', '30% Reliable', '25% A Bit Tired', '10% Honey Sweet'],
        description: 'You\'re warm and reliable, but tired today. This "Electric Honey" gives you energy and comfort.',
        suggestion: 'Give yourself some sweetness and spark - you deserve rest tonight.',
        tags: ['emotion', 'energy'],
        colors: ['#FFD700', '#DAA520', '#B8860B']
    },
    {
        name: 'Shadow Whisper',
        flavor: 'Black Vodka × Mint × Citrus',
        ingredients: ['40% Mysterious', '30% Perceptive', '20% Unspoken', '10% Mint Cool'],
        description: 'You\'re mysterious, perceptive, never revealing all. This "Shadow Whisper" understands your silence.',
        suggestion: 'Some power comes from silence - this drink gets you.',
        tags: ['personality', 'emotion'],
        colors: ['#2F4F4F', '#000000', '#696969']
    },
    {
        name: 'Pink Eclipse',
        flavor: 'Rose × Raspberry × Sparkling Wine',
        ingredients: ['40% Romantic Sensitivity', '30% Need a Hug', '20% Tenderness', '10% Rose Scent'],
        description: 'You\'re emotionally romantic, wanting to be held tonight. This "Pink Eclipse" treats you gently.',
        suggestion: 'May your tenderness find a place to rest tonight.',
        tags: ['emotion', 'personality'],
        colors: ['#FFB6C1', '#FF69B4', '#FFC0CB']
    },
    {
        name: 'Dark Matter Mojito',
        flavor: 'Black Mint Syrup × Lime × White Rum',
        ingredients: ['35% Want to Relax', '30% Can\'t Let Go', '25% Conflicted', '10% Mint'],
        description: 'You want to relax but can\'t let go. This "Dark Matter Mojito" helps you find balance.',
        suggestion: 'If you don\'t know where to go, have a drink first.',
        tags: ['emotion', 'energy'],
        colors: ['#2F4F4F', '#00FA9A', '#98FB98']
    },
    {
        name: 'Forbidden Halo',
        flavor: 'Passion Fruit × Tequila × Chili',
        ingredients: ['40% Dangerous Attraction', '30% Explosive Charm', '20% Spicy', '10% Passion Fruit'],
        description: 'Your dangerous attraction is off the charts. This "Forbidden Halo" is as impossible to ignore as you.',
        suggestion: 'Tonight, you\'re the light no one can miss.',
        tags: ['personality', 'outfit'],
        colors: ['#FF4500', '#FF6347', '#FFD700']
    },
    {
        name: 'Silver Pulse',
        flavor: 'Elderflower × Vodka × Soda Water',
        ingredients: ['40% Rational Exterior', '30% Soft Interior', '20% Heartbeat', '10% Floral'],
        description: 'You hide softness beneath rationality. This "Silver Pulse" gently catches your heartbeat.',
        suggestion: 'May your heartbeat be tenderly caught tonight.',
        tags: ['personality', 'emotion'],
        colors: ['#C0C0C0', '#E0E0E0', '#F0F0F0']
    },
    {
        name: 'Nightfall Garden',
        flavor: 'Cucumber Gin × Basil × Lemon',
        ingredients: ['40% Fresh', '30% Quirky', '20% Unique Soul', '10% Herbal'],
        description: 'You\'re a fresh yet quirky soul. This "Nightfall Garden" appreciates your uniqueness.',
        suggestion: 'Your uniqueness is the oxygen the night needs.',
        tags: ['personality', 'outfit'],
        colors: ['#90EE90', '#98FB98', '#00FA9A']
    },
    {
        name: 'Scarlet Circuit',
        flavor: 'Cranberry × Spicy Vodka',
        ingredients: ['40% Won\'t Hold Back', '30% Fiery Energy', '20% Red Power', '10% Spice'],
        description: 'You won\'t hold back tonight, wanting to live with more fire. This "Scarlet Circuit" releases your energy.',
        suggestion: 'Let your red energy flow freely.',
        tags: ['emotion', 'energy'],
        colors: ['#DC143C', '#FF0000', '#8B0000']
    },
    {
        name: 'Moonlit Smoke',
        flavor: 'Smoked Whiskey × Apple × Bitter Orange',
        ingredients: ['40% Stories', '30% Solitude', '20% Depth', '10% Smoke'],
        description: 'You have stories, solitude, and depth. This "Moonlit Smoke" accompanies your past.',
        suggestion: 'May your past be carried away by wind, leaving only fragrance.',
        tags: ['emotion', 'personality'],
        colors: ['#D2691E', '#8B4513', '#A0522D']
    },
    {
        name: 'Sapphire Riddle',
        flavor: 'Blue Curaçao × White Grape × Soda',
        ingredients: ['40% Seemingly Simple', '30% Hard to Read', '20% Mysterious Charm', '10% Bubbles'],
        description: 'You seem easy to understand but are hard to decipher. This "Sapphire Riddle" reflects your multifaceted nature.',
        suggestion: 'You don\'t need to explain - mystery itself is your charm.',
        tags: ['personality', 'outfit'],
        colors: ['#0F52BA', '#4169E1', '#6495ED']
    },
    {
        name: 'Phantom Lullaby',
        flavor: 'Coconut Milk × White Rum × Vanilla',
        ingredients: ['40% Exhausted', '30% Still Gentle', '20% Unspoken Grievances', '10% Coconut'],
        description: 'You\'re exhausted yet remain gentle. This "Phantom Lullaby" soothes all your unspoken grievances.',
        suggestion: 'Let this drink comfort all the words you couldn\'t say tonight.',
        tags: ['emotion', 'energy'],
        colors: ['#FFFACD', '#FAFAD2', '#F5DEB3']
    }
];

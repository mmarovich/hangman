/*
    Information on each breed was taken directly from dogtime.com, with minor modifications.
    Please feel free to fork this repository and push new breeds or updated info
*/

var dogs = [
    {
        breed: "basset hound",
        info: `They were bred for hunting small game such as rabbits and is still used for this purpose in some parts of the country. 
            When they're not on the trail of a bunny, they're a laid-back family friend who love kids.`
    },
    {
        breed: "beagle",
        info: `Small, compact, and hardy, they are active companions for kids and adults alike. 
            Canines in this dog breed are merry and fun loving, but being hounds, they can also be stubborn and require patient, creative training techniques. 
            Their noses guide them through life, and they’re never happier than when following an interesting scent. 
            They originally were bred as a scenthound to track small game, mostly rabbits and hare. 
            They are still used for this purpose in many countries, including the United States.`
    },
    {
        breed: "bulldog",
        info: `They are stocky and muscular, but also agile and built for chasing down stray cattle and helping out with work on the farm. 
            In fact, some are known to jump six feet or more into the air. 
            They are intelligent and affectionate, which makes them great, protective family dogs, though they have high exercise needs and require an experienced, active owner. 
            They can vary in appearance, as there are multiple types, including the Bully or Classic type, also known as the Johnson type, the Standard or Performance type, also called the Scott type, and hybrids of the two. 
            With patient training and care, they can make loving family companions.`
    },
    {
        breed: "chihuahua",
        info: `Their charms include their small size, outsize personality, and variety in coat types and colors. They're 
            fully capable of competing in dog sports such as agility and obedience, and are among the top 10 watchdogs recommended 
            by experts. They love nothing more than being with their people and require a minimum of grooming and exercise.`
    },
    {
        breed: "chow Chow",
        info: `This distinctive-looking dog breed has a proud, independent spirit that some describe as catlike. They can be aloof — 
            if you’re looking for a cuddle buddy, this probably isn’t the best breed for you — and downright suspicious of strangers. 
            But for the right person, he’s a fiercely loyal companion.`
    },
    {
        breed: "cocker Spaniel",
        info: `They are primarily a beloved companion dog breed, though they remain capable bird dogs at heart. Beautiful to 
            look at (and labor-intensive to groom), their amenable, cheerful disposition also makes them a treat to have in the 
            family. Never more pleased than when they're pleasing you, they're as happy to snuggle on the couch with their 
            favorite adults as to romp in the yard with the kids.`
    },
    {
        breed: "collie",
        info: `This dog breed is a native of Scotland, mostly of the Highland regions but also bred in the Scottish Lowlands 
            and northern England, where they were used primarily as a herding dog. They are a sensitive and intelligent dog, 
            known for their undying loyalty and amazing ability to foresee their owner’s needs. they are a great family 
            companion, and is still a capable herding dog.`
    },
    {
        breed: "dachshund",
        info: `They are scent hound dog breeds who were bred to hunt badgers and other tunneling animals, rabbits, and foxes. 
            Packs of them were even used to trail wild boar. 
            Today their versatility makes them excellent family companions, show dogs, and small-game hunters.`
    },
    {
        breed: "dalmatian",
        info: `This sleek and athletic dog breed has a history that goes back several hundred years. They started out as a coach 
            dog but has also served in many other capacities, including hunter, firehouse dog, and circus performer. As charming 
            in life as in film, they go from gallant to goofy to gallant again in the blink of an eye, and loves to be a part of 
            everything his family does.`
    },
    {
        breed: "doberman Pinscher",
        info: `They were developed in Germany during the late 19th century, primarily as a guard dog. Their exact ancestry is 
            unknown, but they're believed to be a mixture of many dog breeds, including the Rottweiler, Black and Tan Terrier, 
            and German Pinscher. With their sleek coat, athletic build, and characteristic cropped ears and docked tail, 
            they look like an aristocrat. They are a highly energetic and intelligent dog, suited for police and military work, 
            canine sports, and as a family guardian and companion.`
    },
    {
        breed: "german shepherd",
        info: `They are one of America’s most popular dog breeds — for good reason. 
            They are an intelligent and capable working dog. 
            Their devotion and courage are unmatched. 
            And they're amazingly versatile, excelling at most anything he’s trained to do: 
            guide and assistance work for the handicapped, police and military service, herding, 
            search and rescue, drug detection, competitive obedience and, last but not least, faithful companion.`
    },
    {
        breed: "golden Retriever",
        info: `They are one of the most popular dog breeds in the U.S. The breed’s friendly, tolerant attitude makes them a 
            fabulous family pet, and their intelligence makes them a highly capable working dog. They excel at retrieving game 
            for hunters, tracking, sniffing out drugs, and as therapy and assistance dogs. They’re also natural athletes, and 
            do well in dog sports such as agility and competitive obedience.`
    },
    {
        breed: "great Dane",
        info: `They are truly a great dog breed — large and noble, commonly referred to as a gentle giant or as the “Apollo 
        of dogs.” Apollo is the Greek god of the sun, the brightest fixture in the sky. They certainly hold stature in the 
        dog world; but though they look terribly imposing, in reality they're one of the best-natured dogs around. For all of 
        his size, they are a sweet, affectionate pet. They love to play and are gentle with children.`
    },
    {
        breed: "greyhound",
        info: `They were originally bred as hunting dogs to chase hare, foxes, and deer. Canines in this dog breed can reach 
            speeds of 40 to 45 miles per hour, making them the Ferraris of the dog world. Not surprisingly, they made a name 
            for themselves as racing dogs and are still used in racing today. They also participate in many other dog sports, 
            including lure coursing, conformation, obedience, and agility. Beyond their grace and speed, people love them for 
            their sweet, mild nature.`
    },
    {
        breed: "labrador Retriever",
        info: `They were bred to be both a friendly companion and a useful working dog breed. Historically, they earned their 
            keep as a fisherman’s helper: hauling nets, fetching ropes, and retrieving fish from the chilly North Atlantic. 
            Today they are as good-natured and hard working as their ancestors, and they're America’s most popular breed. These 
            days they work as a retriever for hunters, assistance dog to the handicapped, show competitor, and search and rescue 
            dog, among other canine jobs.`
    },
    {
        breed: "poodle",
        info: `Elegant. Proud. Clever. They are impressive dogs, as the many best-in-show winners from this dog breed can attest. 
        Behind the blue ribbons, impressive hairdos, and regal attitude, you’ll find an affectionate family dog with an ancient 
        history and many talents.`
    },
    {
        breed: "pug",
        info: `They often are described as a lot of dog in a small space. These sturdy, compact dogs are a part of the American 
            Kennel Club’s Toy group, and are known as the clowns of the canine world because they have a great sense of humor 
            and like to show off. Originally bred to be a lap dog, the they thrive on human companionship.`
    },
    {
        breed: "rottweiler",
        info: `They were originally dogs bred to drive cattle to market. 
            Later they were used to pull carts for butchers. 
            They were among the earliest police dogs and serve with honor in the military. 
            Most important, they are popular family guardians and friends.` 
    },
    {
        breed: "saint bernard",
        info: `Originally they were used to guard the grounds of a samely-named hospice in Switzerland as well as to help find and save lost and injured travelers. 
            Today they enjoy the comforts of family life in many homes across the world. They are versatile and excel in the show ring and in obedience trials, drafting (pulling a cart or wagon), and weight pulling competitions.`
    },
    {
        breed: "Siberian Husky",
        info: `They are a beautiful dog breed with a thick coat that comes in a multitude of colors and markings. Their blue or 
            multi-colored eyes and striking facial masks only add to the appeal of this breed. It is easy to see why many are 
            drawn to their wolf-like looks, but be aware that this athletic, intelligent dog can be independent and challenging 
            for first-time dog owners. They also put the “H” in Houdini and need a fenced yard that is sunk in the ground to 
            prevent escapes.`
    },
    {
        breed: "schnauzer",
        info: `They were originally bred to be ratters, guard dogs, and all-purpose dogs on German farms. 
            Their versatility, medium size, protective nature, and love of family make them an excellent companion dog breed.`
    }
]
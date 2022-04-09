const app = Vue.createApp({
    data() {
        return {
            zad1: {
                product: "book",
                unit_price: "17zł",
                quantity: "3",
                ammount: 51,
                tax_rate: "23%",
                total: "62.73zł"
            },
            zad2: {
            //     <span>{{zad2.title}}</span>
            // <span>{{zad2.adres}}</span>
            // <span>{{zad2.kod}}</span>
            // <span>{{zad2.telefon}}</span>
            // <span>{{zad2.url}}</span>
                title: "UNIKPOL S.A.",
                adres: "ul. Ukryta 5",
                kod: "02-114 Radawa Mazowiecka",
                telefon: "tel. 22 3345 90 21, 888 213 992",
                url: "http://www.unikpol.pl"
            },
            zad3: {
                todo: ["Kup bilety", "Zrób pranie", "Zatankuj", "Ugotuj obiad"]
            },
            zad4: {
                counter: 0
            },
            zad5: {
                title: null,
                name: null,
                sname: null
            },
            zad6: {
                weight: null,
                height: null
            }
        }
    },
    methods: {
        newsub() {
            this.subjects = [
                {name:'MAT', grade:3},
                {name:'GEO', grade:4}
            ]
        },
        increment() {
            this.zad4.counter += 1
        },
        showData() {
            console.log(`Title: ${this.zad5.title}`)
            console.log(`Name: ${this.zad5.name}`)
            console.log(`Surname: ${this.zad5.sname}`)
        }
    },
    computed: {
        bmiValue() {
            return this.zad6.weight/Math.pow(this.zad6.height,2)
        }
    }
})

'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'es' | 'en' | 'pt-BR'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({
  language: 'es',
  setLanguage: () => {},
  t: key => key
})

export { I18nContext }

const translations = {
  'pt-BR': {
    // Header
    'nav.benefits': 'Benefícios',
    'nav.howItWorks': 'Como Funciona',
    'nav.questions': 'Perguntas',
    'nav.contact': 'Contato',
    'nav.contactUs': 'Fale Conosco',
    
    // Hero
    'hero.tagline': 'A melhor proteção para sua moto',
    'hero.benefit1': 'Instalação rápida',
    'hero.benefit2': 'Design inteligente',
    'hero.benefit3': 'Proteção completa',
    'hero.highlight1': 'Proteção 360° para sua moto',
    'hero.highlight2': 'Durabilidade garantida',
    'hero.title': 'SUA MOTO SEMPRE LIMPA E PROTEGIDA',
    'hero.subtitle': 'Garagem portátil dobrável que protege sua moto do sol, chuva e poeira.',
    'hero.highlight': 'Projetado no Peru para proteger sua moto em qualquer lugar',
    'hero.feature1': 'Rápido de usar',
    'hero.feature2': 'Design portátil',
    'hero.feature3': 'Proteção total',
    'hero.cta': 'Proteja sua moto agora',
    'hero.seeBenefits': 'Ver benefícios →',
    
    // Why Koov
    'why.title': 'Por que escolher KOOV COVER?',
    'why.subtitle': 'Projetado especificamente para motociclistas que buscam proteção prática e eficiente',

    // Benefits
    'benefits.title': 'Benefícios',
    'benefits.subtitle': 'Proteção completa para sua motocicleta',
    'benefits.weather.title': 'Proteção contra intempéries',
    'benefits.weather.description': 'Protege sua moto do sol, chuva e poeira',
    'benefits.maintenance.title': 'Fácil manutenção',
    'benefits.maintenance.description': 'Material durável e fácil de limpar',
    'benefits.portability.title': 'Portátil',
    'benefits.portability.description': 'Leve e dobrável para fácil transporte',
    'benefits.storage.title': 'Armazenamento eficiente',
    'benefits.storage.description': 'Ocupa pouco espaço quando dobrado',
    'benefits.time.title': 'Rápido de usar',
    'benefits.time.description': 'Instalação e remoção em minutos',
    'benefits.quality.title': 'Alta qualidade',
    'benefits.quality.description': 'Materiais premium e acabamento superior',
    
    // Campaign Modal
    'campaign.title': 'Tenha seu próprio KOOV COVER e conte-nos sua experiência',
    'campaign.subtitle': 'Participe da nossa primeira campanha e seja um dos 5 sortudos a receber seu KOOV COVER totalmente grátis.',
    'campaign.special': 'Campanha Especial!',
    'campaign.stats.prizes': 'Prêmios',
    'campaign.stats.days': 'Dias',
    'campaign.stats.free': 'Grátis',
    'campaign.stats.exclusive': 'Exclusivo',
    'campaign.feature1.title': 'Primeiros Usuários',
    'campaign.feature1.desc': 'Seja pioneiro usando KOOV COVER',
    'campaign.feature2.title': 'Totalmente Grátis',
    'campaign.feature2.desc': 'Sem custo, apenas seu depoimento',
    'campaign.feature3.title': 'Compartilhe',
    'campaign.feature3.desc': 'Sua experiência ajuda outros',
    'campaign.howTo.title': 'Como Participar?',
    'campaign.step1': 'Conte-nos por que você precisa do KOOV COVER',
    'campaign.step2': 'Compartilhe uma foto da sua moto',
    'campaign.step3': 'Comprometa-se a compartilhar sua experiência',
    'campaign.cta': 'Participar Agora',
    'campaign.disclaimer': '* Campanha válida até durar o estoque',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados',
    'footer.designed': 'Projetado no Peru',

    // Manufacturing
    'manufacturing.title': 'Fabricado sob Medida para sua Moto ou Espaço',
    'manufacturing.subtitle': 'Cada KOOV COVER pode ser adaptado ao tamanho da sua moto ou ao espaço que você deseja proteger. Oferecemos fabricação personalizada para garantir o melhor ajuste, seja para motos pequenas, médias, grandes ou até mesmo motos elétricas.',
    'manufacturing.sizes.title': 'Adaptável a Qualquer Tamanho',
    'manufacturing.sizes.small.title': 'Motos Pequenas',
    'manufacturing.sizes.small.description': 'Ideal para scooters e motos leves até 125cc',
    'manufacturing.sizes.medium.title': 'Motos Médias',
    'manufacturing.sizes.medium.description': 'Para motos de 125cc a 500cc',
    'manufacturing.sizes.large.title': 'Motos Grandes',
    'manufacturing.sizes.large.description': 'Adequado para motos acima de 500cc',
    'manufacturing.sizes.custom.title': 'Medidas Personalizadas',
    'manufacturing.sizes.custom.description': 'Adaptamos o KOOV COVER às suas necessidades específicas',
    'manufacturing.features.measurements.title': 'Medidas Exatas',
    'manufacturing.features.measurements.description': 'Fazemos medições específicas da sua moto para garantir um ajuste perfeito',
    'manufacturing.features.custom.title': 'Fabricação Personalizada',
    'manufacturing.features.custom.description': 'Ajustamos cada detalhe às suas necessidades específicas',
    'manufacturing.features.quality.title': 'Qualidade Garantida',
    'manufacturing.features.quality.description': 'Materiais de alta durabilidade e acabamento profissional',
    'manufacturing.cta': 'Solicite seu KOOV COVER personalizado',

    // How it Works
    'howItWorks.title': '🔧 Processo de Instalação do KOOV COVER',
    'howItWorks.subtitle': 'Siga estes passos detalhados para instalar corretamente sua garagem portátil',
    'howItWorks.step1.title': 'Preparar a área de instalação',
    'howItWorks.step1.description': 'Selecione um espaço plano com pelo menos a área mínima de acordo com o tamanho do KOOV COVER selecionado. Certifique-se de que o piso esteja limpo e nivelado.',
    'howItWorks.step2.title': 'Montar a estrutura metálica',
    'howItWorks.step2.description': 'Monte os tubos e acessórios seguindo a numeração e o manual. Conecte os arcos dobráveis e as uniões com os parafusos incluídos.',
    'howItWorks.step3.title': 'Colocar a capa protetora',
    'howItWorks.step3.description': 'Desdobre a capa de Lona/Tarflex/Concord. Ajuste o material sobre a estrutura com os fixadores ou velcros incluídos.',
    'howItWorks.step4.title': 'Fixar ao solo (opcional)',
    'howItWorks.step4.description': 'Coloque objetos pesados como pesos ou blocos de concreto pequenos nos cantos da estrutura, se necessário.',
    'howItWorks.step5.title': 'Teste de abertura e fechamento',
    'howItWorks.step5.description': 'Abra e feche a cúpula várias vezes para verificar o movimento. Ajuste as uniões se notar resistência.',
    'howItWorks.step6.title': 'Pronto para usar',
    'howItWorks.step6.description': 'Estacione sua moto dentro. Feche o KOOV COVER para protegê-la da chuva, sol, poeira e arranhões.',
  },
  es: {
    // Header
    'nav.benefits': 'Beneficios',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.questions': 'Preguntas',
    'nav.contact': 'Contacto',
    'nav.contactUs': 'Contáctanos',
    
    // Hero
    'hero.title': 'TU MOTO SIEMPRE LIMPIA Y PROTEGIDA',
    'hero.subtitle': 'Garaje portátil plegable que cuida tu moto del sol, la lluvia y el polvo.',
    'hero.tagline': 'La mejor protección para tu moto',
    'hero.benefit1': 'Instalación rápida',
    'hero.benefit2': 'Diseño inteligente',
    'hero.benefit3': 'Protección completa',
    'hero.cta': 'Protege tu moto ahora',
    'hero.seeBenefits': 'Ver beneficios →',
    'hero.highlight1': 'Protección 360° para tu moto',
    'hero.highlight2': 'Durabilidad garantizada',
    
    // Why Koov
    'why.title': '¿Por qué elegir KOOV COVER?',
    'why.subtitle': 'Diseñado específicamente para motociclistas que buscan protección práctica y eficiente',
    
    // Benefits
    'benefits.title': 'Beneficios',
    'benefits.subtitle': 'Protección completa para tu motocicleta',
    'benefits.weather.title': 'Protección contra clima',
    'benefits.weather.description': 'Protege tu moto del sol, lluvia y polvo',
    'benefits.maintenance.title': 'Fácil mantenimiento',
    'benefits.maintenance.description': 'Material duradero y fácil de limpiar',
    'benefits.portability.title': 'Portátil',
    'benefits.portability.description': 'Ligero y plegable para fácil transporte',
    'benefits.storage.title': 'Almacenamiento eficiente',
    'benefits.storage.description': 'Ocupa poco espacio cuando está plegado',
    'benefits.time.title': 'Rápido de usar',
    'benefits.time.description': 'Instalación y remoción en minutos',
    'benefits.quality.title': 'Alta calidad',
    'benefits.quality.description': 'Materiales premium y acabado superior',
    
    // Campaign Modal
    'campaign.title': 'Ten tu propio KOOV COVER y cuéntanos tu experiencia',
    'campaign.subtitle': 'Participa en nuestra primera campaña y sé uno de los 5 afortunados en recibir tu KOOV COVER completamente gratis.',
    'campaign.special': '¡Campaña Especial!',
    'campaign.stats.prizes': 'Premios',
    'campaign.stats.days': 'Días',
    'campaign.stats.free': 'Gratis',
    'campaign.stats.exclusive': 'Exclusivo',
    'campaign.feature1.title': 'Primeros Usuarios',
    'campaign.feature1.desc': 'Sé pionero en usar KOOV COVER',
    'campaign.feature2.title': 'Totalmente Gratis',
    'campaign.feature2.desc': 'Sin costo, solo tu testimonio',
    'campaign.feature3.title': 'Comparte',
    'campaign.feature3.desc': 'Tu experiencia ayuda a otros',
    'campaign.howTo.title': '¿Cómo Participar?',
    'campaign.step1': 'Cuéntanos por qué necesitas KOOV COVER',
    'campaign.step2': 'Comparte una foto de tu moto',
    'campaign.step3': 'Compromete a compartir tu experiencia',
    'campaign.cta': 'Participar Ahora',
    'campaign.disclaimer': '* Campaña válida hasta agotar stock',
    
    // WhatsApp Float
    'whatsapp.aria': 'Contactar por WhatsApp',
    'whatsapp.message': 'Hola, quiero más información sobre KOOV COVER',
    'whatsapp.custom': 'Hola, quiero solicitar un KOOV COVER a medida',

    // Traditional Comparison
    'comparison.title': 'Comparación: Protector Tradicional vs KOOV COVER',
    'comparison.subtitle': 'Análisis detallado de experiencia de usuario en situaciones cotidianas del motociclista limeño',
    'comparison.situation': 'SITUACIÓN',
    'comparison.traditional': 'PROTECTOR TRADICIONAL',
    'comparison.koov': 'KOOV COVER',
    'comparison.benefit': 'BENEFICIO REAL',
    'comparison.morning.title': 'Experiencia matutina (prisa)',
    'comparison.morning.traditional': 'Quitar funda, doblar, ensuciar manos, buscar dónde dejarla',
    'comparison.morning.koov': 'Abrir puerta, arrancar, partir limpio',
    'comparison.morning.impact': 'Ahorras 3-5 minutos diarios + sin estrés',
    'comparison.weather.title': 'Protección en clima húmedo',
    'comparison.weather.traditional': 'Condensación atrapada, olor a humedad, tela pegajosa',
    'comparison.weather.koov': 'Ambiente seco controlado, ventilación adecuada',
    'comparison.weather.impact': 'Menos óxido, mejor conservación de partes metálicas',
    'comparison.maintenance.title': 'Mantenimiento y limpieza',
    'comparison.maintenance.traditional': 'Polvo adherido, manchas permanentes, deterioro visible',
    'comparison.maintenance.koov': 'Limpieza ocasional, aspecto profesional constante',
    'comparison.maintenance.impact': 'Mantiene valor de reventa de tu motocicleta',
    'comparison.daily.title': 'Uso diario habitual',
    'comparison.daily.traditional': 'Cargar bulto húmedo/sucio, buscar dónde guardarlo',
    'comparison.daily.koov': 'Acceso directo sin manipular materiales',
    'comparison.daily.impact': 'Zero complicaciones, máxima practicidad',
    'comparison.conclusion.title': 'Resultado: Una experiencia completamente diferente',
    'comparison.conclusion.subtitle': 'KOOV COVER no es una "funda mejorada" - es una solución integral diseñada por peruanos para peruanos',
    'comparison.stats.time': '5 MIN',
    'comparison.stats.time.desc': 'Ahorras diario',
    'comparison.stats.life': '3+ AÑOS',
    'comparison.stats.life.desc': 'Vida útil garantizada',
    'comparison.stats.hassle': 'CERO',
    'comparison.stats.hassle.desc': 'Complicaciones diarias',
    'comparison.cta': 'Experimenta la diferencia',

    // Location
    'location.title': 'Nuestra oficina',
    'location.subtitle': 'Av. Colonial 3046, Cercado de Lima',

    // FAQ
    'faq.title': 'Preguntas frecuentes',
    'faq.subtitle': 'Resolvemos las dudas más comunes sobre KOOV COVER',
    'faq.1.question': '¿Protege contra lluvia intensa y polvo fino?',
    'faq.1.answer': 'Sí, KOOV COVER está diseñado con materiales impermeables de alta calidad que protegen completamente contra lluvia intensa, polvo fino y rayos UV. Su diseño hermético garantiza que tu moto permanezca completamente seca y limpia.',
    'faq.2.question': '¿Cuánto tiempo toma desplegarlo?',
    'faq.2.answer': 'El proceso de despliegue toma entre 3 a 5 minutos. Gracias a su diseño intuitivo y sistema de plegado optimizado, cualquier persona puede armarlo rápidamente sin necesidad de herramientas especiales o experiencia previa.',
    'faq.3.question': '¿Necesita instalación fija?',
    'faq.3.answer': 'No, KOOV COVER es completamente portátil. No requiere instalación permanente, tornillos o modificaciones en el suelo. Puedes moverlo fácilmente a cualquier ubicación según tus necesidades.',
    'faq.4.question': '¿Sirve para espacios reducidos?',
    'faq.4.answer': 'Absolutamente. KOOV COVER está especialmente diseñado para espacios urbanos limitados como patios pequeños, azoteas, estacionamientos de departamentos y áreas compactas donde las cocheras tradicionales no son viables.',
    'faq.5.question': '¿Cómo se limpia y mantiene?',
    'faq.5.answer': 'El mantenimiento es muy sencillo. Solo necesitas limpiar la superficie con agua y jabón suave ocasionalmente. Los materiales son resistentes a la intemperie y no requieren tratamientos especiales o mantenimiento complejo.',
    'faq.6.question': '¿Hacen envíos a todo el Perú?',
    'faq.6.answer': 'Sí, realizamos envíos a nivel nacional. Contamos con cobertura en todas las principales ciudades del Perú. Los tiempos de entrega varían según la ubicación, pero generalmente oscilan entre 2 a 7 días hábiles.',

    // Footer 
    'footer.rights': 'Todos los derechos reservados',
    'footer.designed': 'Diseñado en Perú',

    // Manufacturing
    'manufacturing.title': 'Fabricado a Medida para tu Moto o Espacio',
    'manufacturing.subtitle': 'Cada KOOV COVER puede adaptarse al tamaño de tu moto o al espacio que quieras proteger. Ofrecemos fabricación personalizada para asegurar el mejor ajuste, ya sea para motos pequeñas, medianas, grandes o incluso motos eléctricas.',
    'manufacturing.sizes.title': 'Adaptable a Cualquier Tamaño',
    'manufacturing.sizes.small.title': 'Motos Pequeñas',
    'manufacturing.sizes.small.description': 'Ideal para scooters y motos ligeras hasta 125cc',
    'manufacturing.sizes.medium.title': 'Motos Medianas',
    'manufacturing.sizes.medium.description': 'Para motos de 125cc a 500cc',
    'manufacturing.sizes.large.title': 'Motos Grandes',
    'manufacturing.sizes.large.description': 'Adecuado para motos de más de 500cc',
    'manufacturing.sizes.custom.title': 'Medidas Personalizadas',
    'manufacturing.sizes.custom.description': 'Adaptamos KOOV COVER a tus necesidades específicas',
    'manufacturing.features.measurements.title': 'Medidas Exactas',
    'manufacturing.features.measurements.description': 'Tomamos las medidas específicas de tu moto para garantizar un ajuste perfecto',
    'manufacturing.features.custom.title': 'Fabricación Personalizada',
    'manufacturing.features.custom.description': 'Ajustamos cada detalle a tus necesidades específicas',
    'manufacturing.features.quality.title': 'Calidad Garantizada',
    'manufacturing.features.quality.description': 'Materiales de alta durabilidad y acabados profesionales',
    'manufacturing.cta': 'Solicita tu KOOV COVER a medida',

    // How it Works
    'howItWorks.title': '🔧 Proceso de Instalación del KOOV COVER',
    'howItWorks.subtitle': 'Sigue estos pasos detallados para instalar correctamente tu garaje portátil',
    'howItWorks.step1.title': 'Preparar el área de instalación',
    'howItWorks.step1.description': 'Selecciona un espacio plano de al menos el área mínima según el tamaño KOOV COVER seleccionado. Asegúrate de que el piso esté limpio y nivelado.',
    'howItWorks.step2.title': 'Armar la estructura metálica',
    'howItWorks.step2.description': 'Ensambla los tubos y accesorios siguiendo la numeración y el manual. Conecta los arcos plegables y las uniones con pernos y tornillos incluidos.',
    'howItWorks.step3.title': 'Colocar el forro protector',
    'howItWorks.step3.description': 'Despliega el forro de Lona/Tarflex/Concord. Ajusta el material sobre la estructura con sujetadores o velcros incluidos.',
    'howItWorks.step4.title': 'Fijar al suelo (opcional)',
    'howItWorks.step4.description': 'Coloca objetos pesados como pesas o bloques de concreto pequeños en esquinas de la estructura en caso sea necesario.',
    'howItWorks.step5.title': 'Prueba de apertura y cierre',
    'howItWorks.step5.description': 'Abre y cierra la cúpula varias veces para comprobar el movimiento. Ajusta las uniones si notas resistencia.',
    'howItWorks.step6.title': 'Listo para usar',
    'howItWorks.step6.description': 'Estaciona tu moto dentro. Cierra el KOOV COVER para protegerla de lluvia, sol, polvo y rayaduras.',
  },
  en: {
    // Header
    'nav.benefits': 'Benefits',
    'nav.howItWorks': 'How It Works',
    'nav.questions': 'Questions',
    'nav.contact': 'Contact',
    'nav.contactUs': 'Contact Us',
    
    // Hero
    'hero.title': 'YOUR MOTORCYCLE ALWAYS CLEAN AND PROTECTED',
    'hero.subtitle': 'Portable folding garage that protects your motorcycle from sun, rain and dust.',
    'hero.tagline': 'The best protection for your motorcycle',
    'hero.benefit1': 'Quick installation',
    'hero.benefit2': 'Smart design',
    'hero.benefit3': 'Complete protection',
    'hero.cta': 'Protect your motorcycle now',
    'hero.seeBenefits': 'See benefits →',
    'hero.highlight1': '360° motorcycle protection',
    'hero.highlight2': 'Guaranteed durability',
    
    // Why Koov
    'why.title': 'Why choose KOOV COVER?',
    'why.subtitle': 'Specifically designed for motorcyclists looking for practical and efficient protection',
    
    // Benefits
    'benefits.title': 'Benefits',
    'benefits.subtitle': 'Complete protection for your motorcycle',
    'benefits.weather.title': 'Weather Protection',
    'benefits.weather.description': 'Protects your motorcycle from sun, rain and dust',
    'benefits.maintenance.title': 'Easy Maintenance',
    'benefits.maintenance.description': 'Durable material and easy to clean',
    'benefits.portability.title': 'Portable',
    'benefits.portability.description': 'Lightweight and foldable for easy transport',
    'benefits.storage.title': 'Efficient Storage',
    'benefits.storage.description': 'Takes up little space when folded',
    'benefits.time.title': 'Quick to Use',
    'benefits.time.description': 'Installation and removal in minutes',
    'benefits.quality.title': 'High Quality',
    'benefits.quality.description': 'Premium materials and superior finish',
    
    // Campaign Modal
    'campaign.title': 'Get your own KOOV COVER and tell us your experience',
    'campaign.subtitle': 'Join our first campaign and be one of the 5 lucky ones to receive your KOOV COVER completely free.',
    'campaign.special': 'Special Campaign!',
    'campaign.stats.prizes': 'Prizes',
    'campaign.stats.days': 'Days',
    'campaign.stats.free': 'Free',
    'campaign.stats.exclusive': 'Exclusive',
    'campaign.feature1.title': 'First Users',
    'campaign.feature1.desc': 'Be a pioneer in using KOOV COVER',
    'campaign.feature2.title': 'Completely Free',
    'campaign.feature2.desc': 'No cost, just your testimony',
    'campaign.feature3.title': 'Share',
    'campaign.feature3.desc': 'Your experience helps others',
    'campaign.howTo.title': 'How to Participate?',
    'campaign.step1': 'Tell us why you need KOOV COVER',
    'campaign.step2': 'Share a photo of your motorcycle',
    'campaign.step3': 'Commit to sharing your experience',
    'campaign.cta': 'Participate Now',
    'campaign.disclaimer': '* Campaign valid until stock runs out',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.designed': 'Designed in Peru',

    // Location
    'location.title': 'Our Office',
    'location.subtitle': 'Av. Colonial 3046, Cercado de Lima',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us through WhatsApp',
    'contact.cta': 'Contact us on WhatsApp',

    // Traditional Comparison
    'comparison.title': 'Comparison: Traditional Cover vs KOOV COVER',
    'comparison.subtitle': 'Detailed analysis of user experience in everyday situations of Lima motorcyclists',
    'comparison.situation': 'SITUATION',
    'comparison.traditional': 'TRADITIONAL COVER',
    'comparison.koov': 'KOOV COVER',
    'comparison.benefit': 'REAL BENEFIT',
    'comparison.morning.title': 'Morning Experience (rush)',
    'comparison.morning.traditional': 'Remove cover, fold, dirty hands, find where to leave it',
    'comparison.morning.koov': 'Open door, start, leave clean',
    'comparison.morning.impact': 'Save 3-5 minutes daily + no stress',
    'comparison.weather.title': 'Protection in humid weather',
    'comparison.weather.traditional': 'Trapped condensation, damp smell, sticky fabric',
    'comparison.weather.koov': 'Controlled dry environment, proper ventilation',
    'comparison.weather.impact': 'Less rust, better preservation of metal parts',
    'comparison.maintenance.title': 'Maintenance and cleaning',
    'comparison.maintenance.traditional': 'Adhered dust, permanent stains, visible deterioration',
    'comparison.maintenance.koov': 'Occasional cleaning, constant professional appearance',
    'comparison.maintenance.impact': 'Maintains motorcycle resale value',
    'comparison.daily.title': 'Daily usual use',
    'comparison.daily.traditional': 'Carry wet/dirty bulk, look for where to store it',
    'comparison.daily.koov': 'Direct access without handling materials',
    'comparison.daily.impact': 'Zero complications, maximum practicality',
    'comparison.conclusion.title': 'Result: A completely different experience',
    'comparison.conclusion.subtitle': 'KOOV COVER is not an "improved cover" - it is a comprehensive solution designed by Peruvians for Peruvians',
    'comparison.stats.time': '5 MIN',
    'comparison.stats.time.desc': 'Daily savings',
    'comparison.stats.life': '3+ YEARS',
    'comparison.stats.life.desc': 'Guaranteed lifetime',
    'comparison.stats.hassle': 'ZERO',
    'comparison.stats.hassle.desc': 'Daily complications',
    'comparison.cta': 'Experience the difference',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'We solve the most common doubts about KOOV COVER',
    'faq.1.question': 'Does it protect against heavy rain and fine dust?',
    'faq.1.answer': 'Yes, KOOV COVER is designed with high quality waterproof materials that completely protect against heavy rain, fine dust and UV rays. Its hermetic design ensures your motorcycle stays completely dry and clean.',
    'faq.2.question': 'How long does it take to unfold?',
    'faq.2.answer': 'The unfolding process takes between 3 to 5 minutes. Thanks to its intuitive design and optimized folding system, anyone can assemble it quickly without the need for special tools or prior experience.',
    'faq.3.question': 'Does it need fixed installation?',
    'faq.3.answer': 'No, KOOV COVER is completely portable. It requires no permanent installation, screws, or ground modifications. You can easily move it to any location according to your needs.',
    'faq.4.question': 'Is it suitable for small spaces?',
    'faq.4.answer': 'Absolutely. KOOV COVER is specially designed for limited urban spaces such as small patios, rooftops, apartment parking lots, and compact areas where traditional garages are not viable.',
    'faq.5.question': 'How is it cleaned and maintained?',
    'faq.5.answer': 'Maintenance is very simple. You only need to clean the surface with mild soap and water occasionally. The materials are weather resistant and do not require special treatments or complex maintenance.',
    'faq.6.question': 'Do you ship to all of Peru?',
    'faq.6.answer': 'Yes, we ship nationwide. We have coverage in all major cities of Peru. Delivery times vary according to location, but generally range from 2 to 7 business days.',

    // Manufacturing
    'manufacturing.title': 'Custom Made for Your Motorcycle or Space',
    'manufacturing.subtitle': 'Each KOOV COVER can be adapted to the size of your motorcycle or the space you want to protect. We offer custom manufacturing to ensure the best fit, whether for small, medium, large or even electric motorcycles.',
    'manufacturing.sizes.title': 'Adaptable to Any Size',
    'manufacturing.sizes.small.title': 'Small Motorcycles',
    'manufacturing.sizes.small.description': 'Ideal for scooters and light motorcycles up to 125cc',
    'manufacturing.sizes.medium.title': 'Medium Motorcycles',
    'manufacturing.sizes.medium.description': 'For motorcycles from 125cc to 500cc',
    'manufacturing.sizes.large.title': 'Large Motorcycles',
    'manufacturing.sizes.large.description': 'Suitable for motorcycles over 500cc',
    'manufacturing.sizes.custom.title': 'Custom Measurements',
    'manufacturing.sizes.custom.description': 'We adapt KOOV COVER to your specific needs',
    'manufacturing.features.measurements.title': 'Exact Measurements',
    'manufacturing.features.measurements.description': 'We take specific measurements of your motorcycle to ensure a perfect fit',
    'manufacturing.features.custom.title': 'Custom Manufacturing',
    'manufacturing.features.custom.description': 'We adjust every detail to your specific needs',
    'manufacturing.features.quality.title': 'Guaranteed Quality',
    'manufacturing.features.quality.description': 'High durability materials and professional finishes',
    'manufacturing.cta': 'Request your custom KOOV COVER',

    // How it Works
    'howItWorks.title': '🔧 KOOV COVER Installation Process',
    'howItWorks.subtitle': 'Follow these detailed steps to properly install your portable garage',
    'howItWorks.step1.title': 'Prepare the installation area',
    'howItWorks.step1.description': 'Select a flat space with at least the minimum area according to your selected KOOV COVER size. Make sure the floor is clean and level.',
    'howItWorks.step2.title': 'Assemble the metal structure',
    'howItWorks.step2.description': 'Assemble the tubes and fittings following the numbering and manual. Connect the folding arches and joints with included bolts and screws.',
    'howItWorks.step3.title': 'Place the protective cover',
    'howItWorks.step3.description': 'Unfold the Lona/Tarflex/Concord cover. Adjust the material over the structure with included fasteners or velcro.',
    'howItWorks.step4.title': 'Ground fixing (optional)',
    'howItWorks.step4.description': 'Place heavy objects like weights or small concrete blocks in structure corners if necessary.',
    'howItWorks.step5.title': 'Opening and closing test',
    'howItWorks.step5.description': 'Open and close the dome several times to check movement. Adjust joints if you notice resistance.',
    'howItWorks.step6.title': 'Ready to use',
    'howItWorks.step6.description': 'Park your motorcycle inside. Close the KOOV COVER to protect it from rain, sun, dust and scratches.',
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    setMounted(true)
    try {
      const savedLanguage = localStorage.getItem('koov-language')
      if (savedLanguage && ['es', 'en', 'pt-BR'].includes(savedLanguage)) {
        setLanguage(savedLanguage as Language)
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    try {
      localStorage.setItem('koov-language', language)
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }, [language, mounted])

  // Log cuando el idioma cambia
  useEffect(() => {
    console.log('Language changed to:', language)
  }, [language])

  const t = (key: string): string => {
    try {
      const translation = translations[language][key as keyof typeof translations[typeof language]]
      if (!translation) {
        console.warn(`Missing translation for key: "${key}" in language: "${language}"`)
        // Intentar obtener la traducción en español como fallback
        if (language !== 'es') {
          return translations.es[key as keyof typeof translations['es']] || key
        }
      }
      return translation || key
    } catch (error) {
      console.error(`Error getting translation for key: "${key}"`, error)
      return key
    }
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

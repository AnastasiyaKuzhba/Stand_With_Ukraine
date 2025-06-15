document.addEventListener('DOMContentLoaded', function () {
  const timelineItems = document.querySelectorAll('.js-accordion-trigger');

  timelineItems.forEach(item => {
    // Create accordion content div
    const content = document.createElement('div');
    content.className = 'accordion-content';
    content.style.maxHeight = '0';
    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.3s ease-out';

    // Add specific content for Transnistria item
    if (item.textContent.includes('Transnistria')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li><b>The Transnistria War</b> was an armed conflict that took place primarily <b>in 1992</b> between the newly independent Republic of Moldova and separatist forces <b>supported by Russian Federation</b> in the region of Transnistria.</li>
                    <li>The conflict began after <b>Moldova declared independence from the Soviet Union in 1991</b>, prompting pro-Russian separatists in Transnistria to seek autonomy and later de facto independence.</li>
                    <li>Transnistrian separatists, supported by elements of the <b>14th Soviet Army (later the Russian Army)</b>, clashed with Moldovan government forces, particularly around the city of <b>Bender (Tighina)</b>.</li>
                    <li>The war resulted in approximately <b>1,000 deaths</b> and thousands more wounded or displaced.</li>
                    <li>A <b>ceasefire agreement was brokered by Russia</b> and signed on <b>July 21, 1992</b>, freezing the conflict and leaving Transnistria as a breakaway region with its own unrecognized government.</li>
                    <li>Despite the ceasefire, <b>Russian troops have remained stationed in Transnistria</b>, which has been a point of tension between Russia and Moldova.</li>
                </ul>
            `;
    }

    // Add specific content for Abkhazia item    
    else if (item.textContent.includes('Abkhazia')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li>The Abkhaz–Georgian conflict broke out in <b>August 1992</b>, shortly after the collapse of the Soviet Union, during a period of geopolitical instability and shifting power dynamics in the Caucasus region.</li>
                    <li>One of the underlying causes was the <b>Russian Federation's interest in preserving influence over Georgia</b>, a newly independent state seeking to consolidate its sovereignty and move away from Moscow's sphere of control.</li>
                    <li>In this context, <b>Georgian government forces entered Abkhazia</b>—an autonomous republic within Georgia—to reassert control over the region amid growing separatist sentiment.</li>
                    <li>Abkhaz separatists, supported by local militias, North Caucasian fighters (including Chechens and Cossacks), and reportedly with logistical and military assistance from elements within the <b>Russian armed forces</b>, fiercely resisted the Georgian advance.</li>
                    <li>The conflict saw heavy combat, including intense battles in <b>Sukhumi, the capital of Abkhazia</b>, and other strategic areas, resulting in widespread destruction and civilian suffering.</li>
                    <li>In <b>September 1993</b>, separatist forces launched a decisive offensive, capturing <b>Sukhumi</b> and defeating the Georgian military presence in the region.</li>
                    <li>The war led to a major humanitarian crisis, with over 200,000 ethnic Georgians displaced and thousands of civilians killed. A <b>ceasefire was signed in 1994, but Abkhazia has remained a de facto breakaway region</b>, recognized by only a few states and continuing to be a major point of tension in Georgian-Russian relations.</li>
                </ul>
            `;
    }

    // Add specific content for First Chechen War item    
    else if (item.textContent.includes('First Chechen War')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li><b>The First Chechen War began in December 1994, when Russian federal forces launched a military operation</b> to prevent the Chechen Republic of Ichkeria from becoming independent.</li>
                    <li>After the collapse of the Soviet Union, Chechnya declared independence in 1991 under the <b>leadership of Dzhokhar Dudayev</b>, a move supported by many Chechens seeking self-determination.</li>
                    <li>The <b>Russian government did not recognize Chechnya's independence</b> and considered it a threat to the territorial integrity of the Russian Federation.</li>
                    <li>The war was marked by heavy urban fighting, especially during the devastating <b>Russian assault on Grozny</b>, which led to significant civilian casualties and widespread destruction.</li>
                    <li>Russian troops faced fierce resistance from Chechen fighters, who used guerrilla tactics and had strong local support.</li>
                    <li>International observers and human rights organizations criticized both sides, but especially highlighted <b>atrocities committed by Russian forces, including bombings of civilian areas.</li>
                    <li><b>The war ended in 1996</b> with a ceasefire agreement (the Khasavyurt Accord), effectively ending Russian military operations and <b>leaving Chechnya with de facto independence until the Second Chechen War began in 1999.</b></li>
                </ul>
            `;
    }

    // Add specific content for Second Chechen War item    
    else if (item.textContent.includes('Second Chechen War')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li><b>Chechnya had declared independence in 1991</b> as the Chechen Republic of Ichkeria, and after the First Chechen War ended in 1996, it operated autonomously, without formal Russian control.</li>
                    <li>The <b>Russian government never recognized Chechnya’s independence</b> and saw its separatist movement as a threat to the territorial integrity of the Russian Federation.</li>
                    <li><b>In August 1999</b>, an armed group led by <b>Shamil Basayev and Ibn al-Khattab</b> invaded Dagestan from Chechnya, claiming to support local Dagestani Islamists. This incursion was used by Russia as the immediate justification for a renewed military campaign.</li>
                    <li>However, <b>reports and analysis suggest that Russian forces had already been preparing for a military operation in Chechnya prior to the Dagestan incursion</b>, and even before the suspicious apartment bombings in Russian cities that were blamed on Chechens — incidents some journalists and former officials have controversially suggested may have been used to galvanize public support for war.</li>
                    <li>Many Chechens view the Russian invasion as an <b>imperialist suppression of their legitimate right to self-determination</b>. From this perspective, labeling their fight for independence as "terrorism" or "separatism" distorts the political motivations of a people seeking national sovereignty.</li>
                    <li>The war was not just a counter-terrorist operation but also a <b>political move to re-establish central control over a breakaway republic</b> and to bolster Vladimir Putin’s rising political profile, which gained momentum during the conflict.</li>
                </ul>
            `;
    }

    // Add specific content for Georgian War item    
    else if (item.textContent.includes('Georgian War')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li>The <b>Russo-Georgian War broke out in August 2008</b> after escalating tensions between Georgia and separatists in South Ossetia, a breakaway region supported by Russia.</li>
                    <li>The conflict began when Georgian forces attempted to regain control over South Ossetia, <b>prompting a large-scale Russian military response</b>.</li>
                    <li> <b>Russian troops, along with South Ossetian and Abkhaz forces</b>, launched a coordinated counteroffensive, <b>advancing deep into Georgian territory</b>.</li>
                    <li>The <b>war lasted five days</b> and resulted in hundreds of deaths, widespread displacement, and extensive damage to infrastructure in Georgia.</li>
                    <li> <b>Russia quickly recognized the independence of South Ossetia and Abkhazia</b> after the conflict, a move condemned by Georgia and most of the international community.</li>
                    <li>The war marked a turning point in <b>Russian-Western relations</b> and highlighted Moscow’s willingness to use force to assert control in its former Soviet sphere.</li>
                    <li>A <b>ceasefire brokered by the EU ended active combat</b>, but tensions remain high, and Russian troops continue to occupy the breakaway regions.</li>
                    <li>The war was not just a counter-terrorist operation but also a <b>political move to re-establish central control over a breakaway republic</b> and to bolster Vladimir Putin’s rising political profile, which gained momentum during the conflict.</li>
                </ul>
            `;
    }

    // Add specific content for Syria War item    
    else if (item.textContent.includes('Syria')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li> <b>Russia’s involvement in the Syrian Civil War began in September 2015</b>, when Moscow launched a military intervention to support the government of <b>Bashar al-Assad</b>.</li>
                    <li> Russia claimed its goal was to fight terrorism, but much of its military activity targeted opposition groups challenging Assad’s rule.</li>
                    <li>Russian airpower, combined with Syrian and Iranian-backed ground forces, helped turn the tide of the war in Assad’s favor.</li>
                    <li>Key battles included the recapture of <b>Aleppo and the siege of Eastern Ghouta</b>, both marked by heavy civilian casualties and destruction.</li>
                    <li>The intervention allowed Russia to secure strategic military bases in Syria, including its naval facility in <b>Tartus</b> and airbase in <b>Khmeimim</b>.</li>
                    <li>Human rights organizations accused Russian forces of committing war crimes through indiscriminate bombings of civilian areas.</li>
                    <li> By <b>2022, Russian forces had entrenched their presence in Syria</b>, solidifying Moscow’s influence in the Middle East and bolstering Assad’s survival.</li>
                    <li>In <b>late 2024</b>, a significant shift occurred when opposition forces launched a surprise offensive, leading to the rapid <b>collapse of Assad's government</b>. Rebel groups, including <b>Hay'at Tahrir al-Sham and Turkish-backed factions</b>, captured key cities such as <b>Aleppo, Hama, and Homs</b>, culminating in the fall of <b>Damascus</b> in early December. </li>
                    <li>Following these events, <b>President Assad fled Syria and was granted asylum in Russia</b>. In response to the changing dynamics, Russia began <b>withdrawing its military forces</b> from various positions in Syria, retaining only its presence at the <b>Khmeimim airbase</b> and the <b>Tartus naval facility</b>.</li>
                    <li>By <b>early 2025</b>, Russia had completed the withdrawal of most of its troops, marking a significant reduction in its military footprint in the region. The <b>new interim government in Syria</b>, established by the <b>opposition forces</b>, initiated plans for a national dialogue to determine the country's future governance. </li>
                    <li></li>
                </ul>
            `;
    }

    // Add specific content for Invasion to Ukraine item    
    else if (item.textContent.includes('Invasion to Ukraine')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li>The conflict began in <b>early 2014, when Russia annexed Ukraine’s Crimean Peninsula</b> following the Euromaidan revolution and the ousting of pro-Russian President Viktor Yanukovych.</li>
                    <li>Soon after, <b>Russian forces covertly entered Ukraine’s eastern Donetsk and Luhansk regions</b>, backing separatist militants and fueling an armed conflict that killed thousands and displaced over a <b>million people.</b></li>
                    <li>The <b>annexation of Crimea</b> and the destabilization of eastern Ukraine were part of a <b>broader geopolitical strategy by Russian President Vladimir Putin</b>, who seeks to <b>reassert influence over former Soviet territories</b> and <b>prevent Ukraine from integrating with NATO and the European Union.</b></li>
                    <li> Moscow’s support included weapons, funding, military advisors, and even unmarked Russian troops, despite consistent official denials of involvement.</li>
                    <li>Attempts at peace, such as the <b>Minsk I and II agreements</b>, led to periodic ceasefires but failed to stop the fighting or restore Ukrainian control over the occupied territories.</li>
                    <li><b>On February 24, 2022, Russia launched a full-scale invasion of Ukraine</b>, attacking from multiple directions, including Belarus, Crimea, and Donbas, <b>aiming to quickly overthrow the Ukrainian government and seize control of the country.</b></li>
                    <li> Major cities including <b>Kyiv, Kharkiv, and Mariupol</b> came under heavy bombardment, resulting in mass civilian casualties and widespread displacement.</li>
                    <li>Ukrainian forces mounted strong resistance, regaining territory in key counteroffensives, while Western nations imposed sweeping sanctions on Russia and supplied military and humanitarian aid to Ukraine.</li>
                    <li> The <b>war continues into 2025</b>, with no full resolution in sight, amid ongoing battles, war crimes investigations, and global repercussions for security and energy stability. <b>Ukraine continue to fight for its freedom and independence.</b></li>
                </ul>
            `;
    }

    // Add specific content for February 26-27, 2014 item
    else if (item.textContent.includes('February 26-27, 2014')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li><b>On the night of February 26–27, 2014, unidentified armed men in military uniforms without insignia — later confirmed to be Russian special forces — seized and occupied key government buildings in Simferopol, the capital of Crimea.</b> These included the <b>Supreme Council of Crimea (the regional parliament)</b> and the <b>Council of Ministers (executive branch).</b> </li>
                    <li>The seizure occurred just hours <b>after pro-Ukrainian and pro-Russian rallies clashed outside the parliament building on February 26</b>, during which at least two people were killed and dozens injured.</li>
                    <li>After taking control, the <b>armed men raised the Russian flag</b> over the buildings. The next day, the <b>Crimean parliament, under armed guard, voted to dismiss the existing regional government and install a new pro-Russian leadership</b>, headed by <b>Sergey Aksyonov.</b></li>
                    <li>Simultaneously, <b>Russian military forces began moving into Crimea</b>, using naval bases and airfields to deploy more troops, equipment, and vehicles, effectively surrounding and cutting off Ukrainian military units and administrative infrastructure.</li>
                    <li>Though Moscow initially denied any involvement, <b>President Vladimir Putin later acknowledged that Russian troops were indeed involved in the occupation and control of key sites across Crimea during this period.</b></li>
                    <li>The operation laid the groundwork for a <b>rapid and illegal annexation of Crimea by the Russian Federation</b>, culminating in the controversial <b>referendum on March 16, 2014</b>, widely considered illegitimate by Ukraine and most of the international community.</li>
                </ul>
            `;
    }

    // Add specific content for March 18, 2014 item
    else if (item.textContent.includes('March 18, 2014')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li><b>On March 18, 2014, the Russian Federation formally annexed Crimea</b>, following a disputed referendum held just two days earlier, on <b>March 16, under conditions of Russian military occupation.</b></li>
                    <li>The <b>referendum claimed overwhelming support (over 95%)</b> for joining Russia, but it was conducted <b>without international observers</b>, under <b>military pressure</b>, and in violation of <b>Ukrainian and international law</b>. Many residents, particularly <b>ethnic Ukrainians and Crimean Tatars, boycotted the vote.</b></li>
                    <li>In Moscow, <b>President Vladimir Putin signed a treaty</b> with local pro-Russian leaders from Crimea and the newly declared “Republic of Crimea,” <b>formally incorporating Crimea and the city of Sevastopol into the Russian Federation.</b></li>
                    <li>The annexation was widely condemned by the <b>United Nations, the European Union, NATO, and the G7</b>, which declared it <b>a violation of Ukraine’s sovereignty and the 1994 Budapest Memorandum</b>, in which Russia had pledged to respect Ukraine’s territorial integrity.</li>
                    <li><b>Only a few countries recognized the annexation</b>; the <b>UN General Assembly passed Resolution 68/262</b>, affirming Ukraine's territorial integrity and <b>declaring the referendum invalid.</b></li>
                    <li>The annexation triggered the <b>first major breach of European borders by force since World War II</b>, marking a serious escalation in <b>Russian-Western tensions</b> and leading to the imposition of <b>economic sanctions on Russia.</b></li>
                    <li>Since <b>2014, Crimea</b> has remained <b>under Russian control</b>, but is <b>internationally recognized as part of Ukraine</b>, and the annexation continues to be a central issue in the broader conflict between Russia and Ukraine.</li>
                </ul>
            `;
    }

    // Add specific content for April 2014 item
    else if (item.textContent.includes('April 2014')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li>In <b>April 2014</b>, shortly after the annexation of Crimea, armed <b>pro-Russian groups</b> began seizing government buildings in <b>Donetsk, Luhansk, and other cities in eastern Ukraine</b>, marking the beginning of an organized separatist uprising.</li>
                    <li>Though initially framed as a local movement, mounting <b>evidence confirmed the involvement of Russian special forces, intelligence operatives (GRU), and military advisors</b>, who coordinated and supported the seizure of Ukrainian territory without formally declaring war.</li>
                    <li>Russian personnel often operated <b>without insignias</b>, similar to tactics used during the Crimea operation. These <b>“little green men”</b> were later acknowledged by Russian President Vladimir Putin to be Russian troops.</li>
                    <li><b>Heavy weapons, tanks, and artillery that could only come from the Russian military</b> began to appear in the hands of separatists, and <b>intercepted communications</b> and satellite imagery confirmed cross-border movement of <b>troops and equipment from Russia into Ukraine.</b></li>
                    <li>By <b>mid-2014</b>, major battles occurred in <b>Sloviansk, Donetsk, and Luhansk</b>, with Ukraine’s military attempting to regain control from separatist and covert Russian forces, resulting in <b>thousands of military and civilian casualties.</b></li>
                    <li>The presence of <b>regular Russian military units was particularly evident in the <b>Battle of Ilovaisk (August 2014)</b> and the <b>Battle of Debaltseve (early 2015)</b>, where Ukrainian troops were encircled and attacked by what OSCE and NATO sources confirmed were Russian formations.</li>
                    <li> Despite repeated denials from the Kremlin, <b>international organizations, journalists, and NGOs have extensively documented Russia's covert military involvement</b>, classifying it as an undeclared hybrid war against Ukraine.</li>
                </ul>
            `;
    }

    // Add specific content for February 24, 2022 item
    else if (item.textContent.includes('February 24, 2022')) {
      content.innerHTML = `
                <ul class="accordion-details">
                    <li>On <b>February 24, 2022, Russia launched a full-scale invasion of Ukraine</b> from multiple directions — including from <b>Russia, Crimea (illegally annexed in 2014), and Belarus</b> — marking the largest military attack in Europe since <b>World War II.</b></li>
                    <li> In a televised address shortly before the attack, <b>Vladimir Putin</b> announced a so-called <b>"special military operation"</b> aimed at the <b>"demilitarization and denazification"</b> of Ukraine — a justification widely dismissed by the international community as <b>propaganda without factual basis.</b></li>
                    <li>Russian forces immediately began <b>missile and air strikes</b> targeting Ukrainian cities, infrastructure, and military bases across the country, including the capital <b>Kyiv, Kharkiv, Odesa, Lviv and other cities</b>, leading to <b>civilian casualties and mass displacement.</b></li>
                    <li>Ukrainian President <b>Volodymyr Zelenskyy declared martial law</b> and called upon citizens to defend the country. Ukrainian Armed Forces, supported by local militias and volunteers, mounted strong resistance, especially in the defense of <b>Kyiv</b> and later in cities like <b>Mariupol, Bucha, and Bakhmut.</b></li>
                    <li>The Russian advance, which initially aimed to <b>capture Kyiv within 3 days</b>, was met with <b>unexpectedly fierce Ukrainian resistance</b>, logistical failures, and low morale among Russian troops, causing major setbacks for Moscow.</li>
                    <li> The invasion prompted a <b>global outcry, leading to unprecedented sanctions on Russia by the U.S., EU, UK,</b> and other allies, as well as significant military and humanitarian aid to Ukraine from Western countries.</li>
                    <li>Throughout <b>2022 and 2023</b>, Russia continued targeting civilian infrastructure — particularly <b>energy facilities</b> — with missiles and drones, causing <b>blackouts and humanitarian hardship.</b> Meanwhile, Ukraine mounted successful counteroffensives, notably liberating <b>Kherson in November 2022.</b></li>
                    <li>Throughout <b>2023</b>, Ukraine conducted counteroffensives in the south and east, reclaiming territories in regions like <b>Kherson and parts of Donetsk.</b> However, progress was hampered by fortified Russian defenses and limited Western military aid, leading to a protracted stalemate on the front lines.</li>
                    <li>In <b>August 2024, Ukrainian forces launched a cross-border offensive into Russia’s Kursk Oblast</b>, marking the first time since World War II that foreign troops occupied Russian territory. The operation was strategically aimed at diverting Russian military resources away from active frontlines within Ukraine and at demonstrating the vulnerability of the Russian Federation’s border regions. By advancing into Russian territory, Ukraine sought to undermine the Kremlin’s narrative of territorial invulnerability and to exert psychological and strategic pressure on Russian command.</li>
                    <li>In <b>late 2024</b>, facing military setbacks and public resistance to further mobilization, President Putin reportedly enlisted <b>support from North Korea</b>. Intelligence from Ukraine and South Korea indicated that around <b>12,000 North Korean troops, including special forces</b>, were deployed—many in the <b>Kursk region</b>—trained in eastern Russia and integrated into Russian units, often wearing Russian uniforms to conceal their identities. The involvement of North Korean troops has raised concerns internationally, as it signifies a deepening military alliance between Russia and North Korea. </li>
                    <li> In <b>2024</b>, Russia intensified its military efforts, capturing over <b>3,000 square kilometers</b> in eastern Ukraine, including strategic areas in <b>Donbas.</b>  Ukrainian forces faced challenges due to <b>ammunition shortages</b> and the need for <b>advanced weaponry.</b></li>
                    <li>By early <b>2025</b>, the conflict remained <b>unresolved</b>, with neither side achieving a decisive advantage. Diplomatic efforts saw mixed results. While Ukrainian President <b>Volodymyr Zelenskyy</b> expressed openness to a <b>ceasefire</b>, Russia's stance remained aggressive, with President <b>Vladimir Putin</b> rejecting U.S.-led ceasefire proposals and keeping the option of <b>nuclear weapons use</b> on the table, though he stated there was no current need for them.</li>
                </ul>
            `;
    }

    // Only add accordion functionality if content was found
    if (content.innerHTML) {
      // Insert content after the timeline item
      item.parentNode.insertBefore(content, item.nextSibling);

      // Add click event to toggle accordion
      item.addEventListener('click', function () {
        const isOpen = content.style.maxHeight !== '0px';
        content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
        item.classList.toggle('active', !isOpen);
      });
    }
  });
}); 
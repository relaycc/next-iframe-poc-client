import { NextPage } from "next";
import { Receiver, Button, ReceiverWithButton } from "../src";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { useState } from "react";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

const Example: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Receiver
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          styles={{
            position: "fixed",
            bottom: "6rem",
            right: "1rem",
          }}
        />
        <Button
          handleClick={() => setIsOpen(!isOpen)}
          styles={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
          }}
        />
        {/* <ReceiverWithButton
            receiverStyles={{
              position: "fixed",
              top: "0rem",
              left: "0rem",
            }}
            buttonStyles={{
              position: "fixed",
              top: "28rem",
              left: "28rem",
            }}
          /> */}
        <div>
          <h1>MyPage</h1>
          <button onClick={() => console.log("clicked button")}>
            click me{" "}
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            turpis tincidunt id aliquet risus. Massa tincidunt dui ut ornare
            lectus sit amet. Sapien pellentesque habitant morbi tristique.
            Tortor dignissim convallis aenean et. Tempus imperdiet nulla
            malesuada pellentesque elit. Tristique risus nec feugiat in
            fermentum posuere urna nec tincidunt. Facilisis leo vel fringilla
            est ullamcorper. Cursus mattis molestie a iaculis at erat. Ut etiam
            sit amet nisl purus in. Vitae ultricies leo integer malesuada nunc
            vel. Tempor commodo ullamcorper a lacus vestibulum sed arcu non.
            Urna nec tincidunt praesent semper feugiat. In mollis nunc sed id.
            Tristique sollicitudin nibh sit amet commodo nulla facilisi. Vitae
            sapien pellentesque habitant morbi tristique senectus et netus et.
            Molestie a iaculis at erat pellentesque adipiscing commodo elit.
            Aliquam nulla facilisi cras fermentum odio eu feugiat. Mattis
            molestie a iaculis at erat. Id velit ut tortor pretium viverra
            suspendisse potenti. Risus quis varius quam quisque id diam. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. A lacus
            vestibulum sed arcu non. Urna et pharetra pharetra massa massa. Mi
            bibendum neque egestas congue quisque. Gravida cum sociis natoque
            penatibus et magnis dis parturient. Porttitor lacus luctus accumsan
            tortor posuere. Elit scelerisque mauris pellentesque pulvinar
            pellentesque habitant. Turpis massa tincidunt dui ut ornare lectus.
            Enim tortor at auctor urna nunc. Elementum curabitur vitae nunc sed
            velit dignissim sodales ut eu. Purus sit amet volutpat consequat
            mauris nunc congue nisi vitae. Vitae turpis massa sed elementum
            tempus egestas sed sed risus. Turpis egestas pretium aenean pharetra
            magna ac placerat vestibulum lectus. Enim ut sem viverra aliquet
            eget. Mauris rhoncus aenean vel elit. Enim diam vulputate ut
            pharetra sit amet aliquam. Pharetra massa massa ultricies mi quis
            hendrerit dolor. Adipiscing commodo elit at imperdiet dui accumsan
            sit amet nulla. Cursus vitae congue mauris rhoncus aenean vel elit
            scelerisque. Ultricies tristique nulla aliquet enim tortor at.
            Consectetur adipiscing elit pellentesque habitant morbi tristique
            senectus et netus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames. Aliquam ultrices sagittis orci a
            scelerisque purus semper. Consequat semper viverra nam libero justo
            laoreet. Mauris in aliquam sem fringilla ut. Pulvinar sapien et
            ligula ullamcorper malesuada proin libero. Pretium fusce id velit
            ut. Cursus euismod quis viverra nibh cras pulvinar mattis nunc.
            Senectus et netus et malesuada fames ac. Tempor orci eu lobortis
            elementum nibh tellus molestie nunc non. Varius vel pharetra vel
            turpis nunc eget lorem. Vehicula ipsum a arcu cursus vitae. Mi
            tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
            Netus et malesuada fames ac turpis egestas sed tempus urna. Sed enim
            ut sem viverra aliquet eget. Diam donec adipiscing tristique risus
            nec feugiat in fermentum. Congue nisi vitae suscipit tellus mauris a
            diam maecenas. Nulla porttitor massa id neque aliquam vestibulum
            morbi blandit cursus. Est ante in nibh mauris cursus mattis.
            Ultrices gravida dictum fusce ut placerat orci nulla pellentesque
            dignissim. Sagittis eu volutpat odio facilisis mauris. Diam ut
            venenatis tellus in metus vulputate. Etiam sit amet nisl purus in
            mollis nunc. Nulla aliquet porttitor lacus luctus accumsan tortor
            posuere. Mauris a diam maecenas sed. Et netus et malesuada fames.
            Eget duis at tellus at urna condimentum mattis. Non enim praesent
            elementum facilisis leo vel fringilla. Erat nam at lectus urna duis
            convallis convallis tellus id. Dui ut ornare lectus sit amet est
            placerat in. Interdum posuere lorem ipsum dolor sit amet consectetur
            adipiscing. Eu turpis egestas pretium aenean. Sit amet aliquam id
            diam maecenas ultricies. Sit amet purus gravida quis blandit turpis
            cursus in hac. Diam quis enim lobortis scelerisque fermentum. Amet
            tellus cras adipiscing enim eu turpis egestas pretium aenean. Dui
            vivamus arcu felis bibendum. Magna fermentum iaculis eu non diam
            phasellus vestibulum lorem sed. Donec massa sapien faucibus et
            molestie ac feugiat sed lectus. Velit aliquet sagittis id
            consectetur purus ut faucibus pulvinar elementum. Faucibus pulvinar
            elementum integer enim neque volutpat ac tincidunt. Nec ullamcorper
            sit amet risus nullam eget felis. Pharetra sit amet aliquam id diam
            maecenas ultricies mi eget. Non blandit massa enim nec dui nunc
            mattis. Sed pulvinar proin gravida hendrerit lectus a. Cursus metus
            aliquam eleifend mi in. Id nibh tortor id aliquet lectus proin. Quis
            viverra nibh cras pulvinar mattis nunc sed blandit. Porta non
            pulvinar neque laoreet suspendisse interdum consectetur libero id. A
            diam sollicitudin tempor id eu. In cursus turpis massa tincidunt dui
            ut ornare lectus sit. In hac habitasse platea dictumst quisque
            sagittis purus sit amet. Elementum nibh tellus molestie nunc non
            blandit massa enim nec. Lacinia at quis risus sed vulputate odio.
            Posuere morbi leo urna molestie at elementum eu facilisis. Tortor
            dignissim convallis aenean et. Viverra suspendisse potenti nullam ac
            tortor vitae. Suscipit tellus mauris a diam maecenas sed enim.
            Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Id
            diam maecenas ultricies mi. Venenatis cras sed felis eget. Ornare
            quam viverra orci sagittis eu volutpat. Sed lectus vestibulum mattis
            ullamcorper velit sed ullamcorper. Molestie a iaculis at erat
            pellentesque adipiscing. Donec pretium vulputate sapien nec sagittis
            aliquam. Bibendum ut tristique et egestas quis ipsum suspendisse.
            Arcu ac tortor dignissim convallis. Fermentum leo vel orci porta non
            pulvinar neque laoreet. Pellentesque elit eget gravida cum sociis
            natoque. Dui nunc mattis enim ut tellus. Commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Interdum velit laoreet id donec
            ultrices. Non arcu risus quis varius quam quisque id. Facilisi
            nullam vehicula ipsum a. Id donec ultrices tincidunt arcu non. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Tempus
            urna et pharetra pharetra massa. Senectus et netus et malesuada
            fames ac turpis egestas. Viverra orci sagittis eu volutpat odio
            facilisis. In nulla posuere sollicitudin aliquam ultrices sagittis.
            Donec massa sapien faucibus et. Elementum eu facilisis sed odio
            morbi. Vel facilisis volutpat est velit egestas dui. Id velit ut
            tortor pretium. Morbi tristique senectus et netus et malesuada
            fames. Eget aliquet nibh praesent tristique magna sit. Amet dictum
            sit amet justo. Aliquet eget sit amet tellus cras adipiscing enim
            eu. Massa tempor nec feugiat nisl pretium. Nunc vel risus commodo
            viverra maecenas accumsan. Ornare arcu dui vivamus arcu felis
            bibendum. Et tortor at risus viverra adipiscing at in tellus. Elit
            ut aliquam purus sit. Vitae sapien pellentesque habitant morbi
            tristique senectus et netus et. Potenti nullam ac tortor vitae.
            Consequat interdum varius sit amet. Rutrum quisque non tellus orci
            ac auctor. Viverra ipsum nunc aliquet bibendum enim facilisis
            gravida neque convallis. Volutpat maecenas volutpat blandit aliquam
            etiam. Augue ut lectus arcu bibendum at varius vel. Ornare quam
            viverra orci sagittis eu volutpat odio. A condimentum vitae sapien
            pellentesque habitant morbi tristique. In iaculis nunc sed augue
            lacus. Sed turpis tincidunt id aliquet risus feugiat in. Laoreet
            suspendisse interdum consectetur libero id faucibus nisl. Ac tortor
            vitae purus faucibus ornare suspendisse. Sodales neque sodales ut
            etiam sit. Fames ac turpis egestas maecenas pharetra. Turpis massa
            tincidunt dui ut. Sit amet aliquam id diam. Commodo elit at
            imperdiet dui accumsan sit amet nulla facilisi. Dolor sed viverra
            ipsum nunc. Volutpat est velit egestas dui id ornare arcu odio ut.
            Id ornare arcu odio ut sem nulla pharetra diam sit. Tincidunt ornare
            massa eget egestas. Suspendisse ultrices gravida dictum fusce ut
            placerat orci nulla pellentesque. Id velit ut tortor pretium viverra
            suspendisse potenti. Orci nulla pellentesque dignissim enim sit amet
            venenatis urna cursus. Tempor orci eu lobortis elementum nibh. Erat
            imperdiet sed euismod nisi porta. Faucibus ornare suspendisse sed
            nisi. Metus dictum at tempor commodo. Non enim praesent elementum
            facilisis leo. Proin nibh nisl condimentum id. At in tellus integer
            feugiat scelerisque. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Mauris vitae ultricies leo integer malesuada nunc
            vel risus. Aliquet porttitor lacus luctus accumsan tortor.
            Adipiscing elit pellentesque habitant morbi tristique. Tincidunt
            ornare massa eget egestas purus viverra accumsan. Felis eget velit
            aliquet sagittis id consectetur purus ut. Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Imperdiet sed euismod nisi porta lorem
            mollis aliquam ut. Amet tellus cras adipiscing enim eu turpis. Eget
            nunc lobortis mattis aliquam faucibus. Etiam erat velit scelerisque
            in dictum non. Tristique nulla aliquet enim tortor at auctor urna
            nunc id. Id diam maecenas ultricies mi eget mauris pharetra. Urna
            porttitor rhoncus dolor purus non enim praesent elementum. Viverra
            aliquet eget sit amet tellus cras adipiscing enim eu. Magnis dis
            parturient montes nascetur ridiculus. Id donec ultrices tincidunt
            arcu non sodales neque. Viverra ipsum nunc aliquet bibendum enim
            facilisis gravida neque convallis. Duis at consectetur lorem donec
            massa sapien faucibus. Proin sagittis nisl rhoncus mattis rhoncus
            urna neque. Nisl vel pretium lectus quam id leo in. Arcu vitae
            elementum curabitur vitae nunc sed velit dignissim sodales.
            Tincidunt nunc pulvinar sapien et ligula ullamcorper. Mauris rhoncus
            aenean vel elit. Tincidunt praesent semper feugiat nibh sed pulvinar
            proin gravida. Leo vel orci porta non. Sagittis eu volutpat odio
            facilisis. Felis imperdiet proin fermentum leo. Risus in hendrerit
            gravida rutrum quisque non tellus orci. Cursus in hac habitasse
            platea dictumst quisque sagittis. Risus in hendrerit gravida rutrum
            quisque non tellus orci. Nunc vel risus commodo viverra. Tincidunt
            dui ut ornare lectus sit. Et magnis dis parturient montes. Mauris in
            aliquam sem fringilla ut morbi. Morbi quis commodo odio aenean sed
            adipiscing. Feugiat vivamus at augue eget arcu dictum varius duis.
            Elit sed vulputate mi sit amet mauris. Varius sit amet mattis
            vulputate enim nulla aliquet porttitor. Urna id volutpat lacus
            laoreet non. Volutpat sed cras ornare arcu dui vivamus arcu. Et
            tortor at risus viverra adipiscing at. Elementum pulvinar etiam non
            quam lacus suspendisse faucibus interdum. Nascetur ridiculus mus
            mauris vitae. Id consectetur purus ut faucibus pulvinar elementum.
            Auctor urna nunc id cursus metus aliquam eleifend mi. Ultricies
            lacus sed turpis tincidunt id aliquet. Praesent semper feugiat nibh
            sed pulvinar proin. Diam in arcu cursus euismod. Lacus suspendisse
            faucibus interdum posuere lorem ipsum dolor sit amet. Habitasse
            platea dictumst vestibulum rhoncus est pellentesque elit. Diam
            maecenas ultricies mi eget mauris pharetra et ultrices neque. Id
            aliquet risus feugiat in ante metus dictum. Urna porttitor rhoncus
            dolor purus non. Tempor commodo ullamcorper a lacus vestibulum sed
            arcu. Amet facilisis magna etiam tempor orci eu lobortis. Ultrices
            mi tempus imperdiet nulla malesuada pellentesque. Condimentum vitae
            sapien pellentesque habitant morbi tristique. Semper auctor neque
            vitae tempus quam pellentesque nec nam. Bibendum enim facilisis
            gravida neque convallis. Iaculis urna id volutpat lacus laoreet non
            curabitur gravida. Sit amet nulla facilisi morbi tempus iaculis
            urna. Diam donec adipiscing tristique risus nec feugiat in fermentum
            posuere. In ornare quam viverra orci sagittis eu. A erat nam at
            lectus urna duis. Vivamus arcu felis bibendum ut. Enim sit amet
            venenatis urna cursus. Dictumst vestibulum rhoncus est pellentesque
            elit ullamcorper dignissim cras tincidunt. Purus semper eget duis at
            tellus at urna condimentum. Risus sed vulputate odio ut enim. Sit
            amet venenatis urna cursus eget nunc scelerisque. Enim tortor at
            auctor urna nunc id cursus metus aliquam. Enim ut sem viverra
            aliquet. In massa tempor nec feugiat nisl pretium fusce.
            Pellentesque elit ullamcorper dignissim cras. Porttitor lacus luctus
            accumsan tortor posuere ac. Turpis cursus in hac habitasse platea
            dictumst. Cursus risus at ultrices mi. Ullamcorper eget nulla
            facilisi etiam dignissim diam. Pellentesque habitant morbi tristique
            senectus et netus et malesuada. Habitasse platea dictumst vestibulum
            rhoncus est. In eu mi bibendum neque egestas. Pharetra convallis
            posuere morbi leo. Mauris sit amet massa vitae. Tellus elementum
            sagittis vitae et. Condimentum lacinia quis vel eros donec ac odio
            tempor orci. Et sollicitudin ac orci phasellus egestas tellus rutrum
            tellus pellentesque. Nunc aliquet bibendum enim facilisis gravida
            neque. Ullamcorper a lacus vestibulum sed arcu non. Nunc congue nisi
            vitae suscipit tellus mauris a diam. Ut tellus elementum sagittis
            vitae et leo duis ut diam. Molestie ac feugiat sed lectus vestibulum
            mattis ullamcorper. Consectetur libero id faucibus nisl tincidunt
            eget nullam non nisi. Nunc non blandit massa enim nec dui nunc
            mattis enim. Ac auctor augue mauris augue neque gravida in
            fermentum. Ut eu sem integer vitae justo eget magna fermentum.
            Congue mauris rhoncus aenean vel. Libero justo laoreet sit amet
            cursus sit amet. Semper quis lectus nulla at volutpat. In metus
            vulputate eu scelerisque felis imperdiet proin fermentum. In nulla
            posuere sollicitudin aliquam ultrices. Facilisis volutpat est velit
            egestas dui id ornare. Arcu cursus euismod quis viverra. Ultrices
            vitae auctor eu augue ut lectus arcu. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames. Turpis massa
            tincidunt dui ut ornare lectus. Tempus iaculis urna id volutpat
            lacus laoreet non curabitur. Pretium nibh ipsum consequat nisl vel
            pretium lectus quam. Sit amet purus gravida quis blandit. Pharetra
            massa massa ultricies mi quis. Nunc sed velit dignissim sodales ut
            eu. Lacus suspendisse faucibus interdum posuere lorem ipsum. Nisi
            quis eleifend quam adipiscing vitae proin sagittis. Sollicitudin
            aliquam ultrices sagittis orci a scelerisque purus semper eget.
            Felis eget nunc lobortis mattis aliquam faucibus purus in. Volutpat
            odio facilisis mauris sit. Pellentesque habitant morbi tristique
            senectus et netus et. Commodo sed egestas egestas fringilla.
            Eleifend donec pretium vulputate sapien. Eget sit amet tellus cras
            adipiscing enim eu turpis egestas. Amet justo donec enim diam
            vulputate ut. Rhoncus urna neque viverra justo nec ultrices dui
            sapien. Metus dictum at tempor commodo ullamcorper a lacus
            vestibulum. Sed vulputate odio ut enim blandit volutpat. Fringilla
            phasellus faucibus scelerisque eleifend donec pretium vulputate
            sapien. Enim blandit volutpat maecenas volutpat blandit aliquam
            etiam erat. Consectetur adipiscing elit ut aliquam purus. Arcu risus
            quis varius quam quisque id. Auctor augue mauris augue neque gravida
            in. In hac habitasse platea dictumst vestibulum rhoncus est
            pellentesque. Enim praesent elementum facilisis leo vel fringilla
            est. Egestas dui id ornare arcu. Vitae elementum curabitur vitae
            nunc. Nec feugiat nisl pretium fusce id velit ut tortor pretium.
            Nunc non blandit massa enim nec dui nunc. Porta non pulvinar neque
            laoreet suspendisse interdum. Nunc eget lorem dolor sed viverra
            ipsum nunc. Volutpat sed cras ornare arcu dui vivamus arcu felis
            bibendum. Urna duis convallis convallis tellus id interdum. Sed arcu
            non odio euismod lacinia at. Quisque id diam vel quam elementum.
            Ullamcorper morbi tincidunt ornare massa eget egestas purus.
            Volutpat blandit aliquam etiam erat. Odio morbi quis commodo odio.
            Auctor augue mauris augue neque gravida in. Semper auctor neque
            vitae tempus. Nibh tortor id aliquet lectus proin. Dui faucibus in
            ornare quam viverra. Venenatis a condimentum vitae sapien
            pellentesque. Id faucibus nisl tincidunt eget nullam non. Convallis
            posuere morbi leo urna molestie. Diam quis enim lobortis scelerisque
            fermentum dui faucibus in. Mauris a diam maecenas sed enim ut sem
            viverra. Ipsum nunc aliquet bibendum enim facilisis. Varius morbi
            enim nunc faucibus a pellentesque sit amet porttitor. Quam vulputate
            dignissim suspendisse in est ante in nibh mauris. Suspendisse
            interdum consectetur libero id faucibus nisl tincidunt eget nullam.
            Egestas dui id ornare arcu odio ut sem nulla pharetra. Purus non
            enim praesent elementum facilisis leo vel fringilla. Magna eget est
            lorem ipsum dolor sit amet. Odio ut sem nulla pharetra diam sit amet
            nisl. Scelerisque mauris pellentesque pulvinar pellentesque habitant
            morbi tristique. Porttitor massa id neque aliquam vestibulum. Est
            lorem ipsum dolor sit amet consectetur adipiscing elit. Gravida arcu
            ac tortor dignissim convallis aenean et tortor. Sapien et ligula
            ullamcorper malesuada proin libero. Adipiscing elit pellentesque
            habitant morbi tristique senectus. Dolor sit amet consectetur
            adipiscing elit ut aliquam purus sit. Odio facilisis mauris sit
            amet. In cursus turpis massa tincidunt dui ut. Facilisis gravida
            neque convallis a cras. Nunc sed velit dignissim sodales ut.
            Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Eu nisl
            nunc mi ipsum faucibus vitae aliquet. Phasellus faucibus scelerisque
            eleifend donec pretium vulputate sapien nec. In tellus integer
            feugiat scelerisque varius morbi. Eleifend quam adipiscing vitae
            proin sagittis nisl rhoncus. Augue eget arcu dictum varius duis at.
            At risus viverra adipiscing at. Diam quam nulla porttitor massa id
            neque. Suspendisse faucibus interdum posuere lorem ipsum dolor sit
            amet. Etiam tempor orci eu lobortis elementum. Mattis rhoncus urna
            neque viverra. Sit amet consectetur adipiscing elit pellentesque
            habitant. Dui accumsan sit amet nulla facilisi. Ultrices tincidunt
            arcu non sodales neque sodales. Orci ac auctor augue mauris augue.
            Lorem ipsum dolor sit amet consectetur adipiscing. Fermentum odio eu
            feugiat pretium nibh ipsum consequat nisl vel. Libero id faucibus
            nisl tincidunt. Eget mauris pharetra et ultrices. Varius duis at
            consectetur lorem donec massa sapien. Pharetra convallis posuere
            morbi leo urna molestie at elementum. Egestas congue quisque egestas
            diam in arcu. Rhoncus mattis rhoncus urna neque viverra justo nec.
            Etiam erat velit scelerisque in dictum non. Pharetra magna ac
            placerat vestibulum lectus. Scelerisque felis imperdiet proin
            fermentum leo vel orci porta. Pharetra pharetra massa massa
            ultricies mi. Euismod nisi porta lorem mollis aliquam ut porttitor
            leo. Semper viverra nam libero justo laoreet sit. Vulputate sapien
            nec sagittis aliquam malesuada bibendum arcu vitae. Sit amet luctus
            venenatis lectus. Etiam tempor orci eu lobortis. Consectetur
            adipiscing elit ut aliquam purus. Eu consequat ac felis donec et
            odio pellentesque. Turpis egestas sed tempus urna. Rhoncus aenean
            vel elit scelerisque mauris pellentesque pulvinar. Lectus magna
            fringilla urna porttitor rhoncus dolor. In nulla posuere
            sollicitudin aliquam. Quisque non tellus orci ac auctor augue mauris
            augue neque. Commodo ullamcorper a lacus vestibulum sed. Adipiscing
            elit duis tristique sollicitudin. Tellus in hac habitasse platea
            dictumst vestibulum rhoncus est pellentesque. In metus vulputate eu
            scelerisque felis imperdiet. Nunc sed blandit libero volutpat sed
            cras ornare arcu dui. Eget sit amet tellus cras adipiscing enim eu
            turpis. Nulla aliquet porttitor lacus luctus accumsan tortor.
            Volutpat commodo sed egestas egestas fringilla phasellus faucibus.
            Fringilla phasellus faucibus scelerisque eleifend donec pretium.
            Diam volutpat commodo sed egestas egestas fringilla phasellus.
            Consectetur a erat nam at lectus urna. Faucibus nisl tincidunt eget
            nullam non nisi. Id porta nibh venenatis cras sed felis. Viverra
            orci sagittis eu volutpat odio facilisis mauris. Orci phasellus
            egestas tellus rutrum tellus pellentesque eu. Consectetur adipiscing
            elit pellentesque habitant morbi tristique. A diam maecenas sed
            enim. Feugiat in ante metus dictum at tempor commodo. Sit amet
            aliquam id diam. At erat pellentesque adipiscing commodo elit at
            imperdiet dui. Lacus vestibulum sed arcu non odio euismod lacinia at
            quis. Fusce ut placerat orci nulla pellentesque dignissim enim sit
            amet. Semper feugiat nibh sed pulvinar proin. Ultrices sagittis orci
            a scelerisque. Scelerisque mauris pellentesque pulvinar pellentesque
            habitant morbi. Elit ut aliquam purus sit amet luctus venenatis
            lectus. Sit amet risus nullam eget. Sit amet consectetur adipiscing
            elit duis tristique sollicitudin. Quis viverra nibh cras pulvinar.
            Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
            feugiat. Id ornare arcu odio ut sem nulla. Viverra ipsum nunc
            aliquet bibendum enim. Varius vel pharetra vel turpis nunc eget
            lorem dolor. Consequat id porta nibh venenatis cras sed felis eget.
            Amet tellus cras adipiscing enim eu turpis. Velit sed ullamcorper
            morbi tincidunt ornare massa eget egestas purus. Posuere urna nec
            tincidunt praesent semper feugiat nibh sed pulvinar. Velit euismod
            in pellentesque massa placerat duis. Eleifend quam adipiscing vitae
            proin sagittis nisl rhoncus mattis rhoncus. Egestas egestas
            fringilla phasellus faucibus scelerisque. At quis risus sed
            vulputate odio ut enim blandit volutpat. Cursus mattis molestie a
            iaculis at erat. Aliquet porttitor lacus luctus accumsan tortor
            posuere ac. Ipsum a arcu cursus vitae congue mauris. Commodo
            ullamcorper a lacus vestibulum sed arcu. Varius quam quisque id diam
            vel. Maecenas volutpat blandit aliquam etiam erat velit scelerisque
            in dictum. Sed sed risus pretium quam vulputate dignissim
            suspendisse in. Amet volutpat consequat mauris nunc congue nisi.
            Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.
            Urna nec tincidunt praesent semper feugiat. Nunc congue nisi vitae
            suscipit tellus mauris a. Praesent semper feugiat nibh sed pulvinar.
            Urna duis convallis convallis tellus id. Convallis a cras semper
            auctor neque vitae. Cursus euismod quis viverra nibh cras. Quisque
            non tellus orci ac auctor augue. Tincidunt ornare massa eget egestas
            purus viverra. Eu ultrices vitae auctor eu augue ut lectus arcu.
            Dictum varius duis at consectetur lorem donec massa sapien. Cras
            ornare arcu dui vivamus arcu felis bibendum. Lectus mauris ultrices
            eros in cursus turpis massa tincidunt. Odio morbi quis commodo odio
            aenean sed adipiscing diam donec. Proin sagittis nisl rhoncus mattis
            rhoncus urna. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. At risus viverra adipiscing at in. Habitant morbi
            tristique senectus et netus et malesuada fames ac. Eu feugiat
            pretium nibh ipsum. Massa sapien faucibus et molestie ac feugiat sed
            lectus vestibulum. Purus non enim praesent elementum facilisis leo
            vel fringilla est. Dignissim cras tincidunt lobortis feugiat vivamus
            at augue eget. Enim facilisis gravida neque convallis a. Sed
            ullamcorper morbi tincidunt ornare massa eget. Quam adipiscing vitae
            proin sagittis nisl rhoncus mattis rhoncus urna. Dolor sed viverra
            ipsum nunc aliquet bibendum enim. Orci dapibus ultrices in iaculis
            nunc. Sit amet nisl purus in mollis nunc sed. Dolor magna eget est
            lorem. Blandit aliquam etiam erat velit scelerisque in dictum non.
            Viverra maecenas accumsan lacus vel facilisis. Laoreet suspendisse
            interdum consectetur libero id faucibus. In cursus turpis massa
            tincidunt. Nam libero justo laoreet sit amet cursus sit amet. In
            dictum non consectetur a erat nam at lectus urna. Fringilla
            phasellus faucibus scelerisque eleifend donec pretium vulputate
            sapien. Scelerisque eleifend donec pretium vulputate sapien nec
            sagittis aliquam malesuada. Porta lorem mollis aliquam ut. Donec
            massa sapien faucibus et molestie ac feugiat sed. Purus semper eget
            duis at tellus at urna condimentum mattis. Dictum fusce ut placerat
            orci nulla pellentesque dignissim enim. Consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus et netus. Scelerisque
            viverra mauris in aliquam sem. Nisl purus in mollis nunc sed.
            Suspendisse ultrices gravida dictum fusce ut placerat orci nulla
            pellentesque. Tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus. Nec nam aliquam sem et tortor consequat id porta nibh.
            Venenatis urna cursus eget nunc scelerisque viverra. Erat imperdiet
            sed euismod nisi porta lorem. Et egestas quis ipsum suspendisse.
            Vestibulum lorem sed risus ultricies tristique. Velit ut tortor
            pretium viverra suspendisse potenti. Vitae ultricies leo integer
            malesuada. Tortor condimentum lacinia quis vel eros donec. Id porta
            nibh venenatis cras sed felis. Nisl tincidunt eget nullam non nisi
            est sit amet facilisis. Nisi est sit amet facilisis magna etiam
            tempor orci eu. Facilisi morbi tempus iaculis urna id. Cursus sit
            amet dictum sit amet justo donec enim diam. Sed augue lacus viverra
            vitae congue eu. Vestibulum lorem sed risus ultricies tristique
            nulla aliquet enim. Aliquam ut porttitor leo a diam. Mollis aliquam
            ut porttitor leo. Odio euismod lacinia at quis risus sed vulputate
            odio. Congue mauris rhoncus aenean vel elit scelerisque mauris. Ut
            morbi tincidunt augue interdum velit euismod in pellentesque massa.
            Donec pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum. At augue eget arcu dictum varius duis. Id cursus metus
            aliquam eleifend. Est velit egestas dui id ornare. Ut placerat orci
            nulla pellentesque dignissim enim sit amet. Vel pharetra vel turpis
            nunc eget. Lobortis scelerisque fermentum dui faucibus in ornare.
            Scelerisque purus semper eget duis at tellus. Volutpat est velit
            egestas dui id ornare arcu. Felis bibendum ut tristique et egestas
            quis. Donec et odio pellentesque diam. Tempor nec feugiat nisl
            pretium fusce id. Iaculis eu non diam phasellus vestibulum lorem.
            Morbi tristique senectus et netus et malesuada fames ac turpis. Dui
            accumsan sit amet nulla facilisi morbi. Dui id ornare arcu odio ut
            sem nulla pharetra diam. Mattis nunc sed blandit libero volutpat sed
            cras ornare arcu. Ipsum a arcu cursus vitae congue mauris rhoncus.
            Arcu cursus euismod quis viverra nibh cras. Sit amet cursus sit amet
            dictum sit amet justo donec. Volutpat diam ut venenatis tellus in
            metus vulputate eu scelerisque. Ut sem viverra aliquet eget sit.
            Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium.
            Elementum tempus egestas sed sed risus pretium quam vulputate.
            Malesuada fames ac turpis egestas. Arcu felis bibendum ut tristique
            et egestas quis ipsum. Mattis ullamcorper velit sed ullamcorper
            morbi tincidunt. Nunc sed augue lacus viverra. Sapien et ligula
            ullamcorper malesuada proin. Eleifend mi in nulla posuere
            sollicitudin aliquam ultrices. Bibendum neque egestas congue quisque
            egestas diam. Nunc pulvinar sapien et ligula ullamcorper malesuada.
            Mauris augue neque gravida in fermentum et sollicitudin ac. Aliquam
            purus sit amet luctus venenatis. Id aliquet lectus proin nibh nisl.
            Viverra tellus in hac habitasse. Metus vulputate eu scelerisque
            felis imperdiet proin fermentum leo. Ultrices gravida dictum fusce
            ut placerat orci. Nisl pretium fusce id velit ut tortor pretium
            viverra suspendisse. Augue mauris augue neque gravida in. Mattis
            vulputate enim nulla aliquet porttitor lacus luctus. In ornare quam
            viverra orci sagittis eu volutpat odio. Malesuada fames ac turpis
            egestas sed tempus urna et. Aenean vel elit scelerisque mauris.
            Blandit cursus risus at ultrices mi tempus. Sit amet luctus
            venenatis lectus magna. Pretium aenean pharetra magna ac. Elementum
            nisi quis eleifend quam adipiscing vitae. Faucibus purus in massa
            tempor nec feugiat nisl. Enim diam vulputate ut pharetra sit amet
            aliquam id diam. Pharetra massa massa ultricies mi quis hendrerit
            dolor magna. Commodo nulla facilisi nullam vehicula ipsum a arcu
            cursus. Id semper risus in hendrerit gravida rutrum quisque. Neque
            volutpat ac tincidunt vitae semper quis lectus nulla at. Consectetur
            libero id faucibus nisl tincidunt eget nullam non nisi. Sed libero
            enim sed faucibus turpis in eu. Purus non enim praesent elementum
            facilisis leo. Tortor at risus viverra adipiscing at in tellus.
            Pharetra convallis posuere morbi leo urna molestie. Pellentesque sit
            amet porttitor eget. Turpis massa sed elementum tempus egestas sed
            sed risus pretium. Odio eu feugiat pretium nibh ipsum consequat nisl
            vel. Ac turpis egestas sed tempus urna. Lorem donec massa sapien
            faucibus et molestie ac feugiat. Molestie at elementum eu facilisis
            sed odio morbi. Volutpat maecenas volutpat blandit aliquam etiam
            erat velit scelerisque. Diam quis enim lobortis scelerisque
            fermentum dui faucibus in. Iaculis eu non diam phasellus. Adipiscing
            bibendum est ultricies integer quis. Mi in nulla posuere
            sollicitudin. Tellus in hac habitasse platea. Eleifend mi in nulla
            posuere sollicitudin aliquam ultrices sagittis orci. Habitasse
            platea dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper. Sollicitudin tempor id eu nisl nunc mi. Vitae et leo
            duis ut diam quam nulla porttitor massa. Et pharetra pharetra massa
            massa ultricies mi quis. Viverra mauris in aliquam sem fringilla ut
            morbi tincidunt. Sollicitudin nibh sit amet commodo nulla facilisi
            nullam vehicula ipsum. Consequat nisl vel pretium lectus. Non
            blandit massa enim nec dui nunc mattis enim. Dictum sit amet justo
            donec enim diam. Sed pulvinar proin gravida hendrerit lectus. Proin
            fermentum leo vel orci porta non. Suspendisse sed nisi lacus sed
            viverra tellus in hac. Eget est lorem ipsum dolor sit. Felis donec
            et odio pellentesque diam. Viverra adipiscing at in tellus integer.
            Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio.
            Condimentum id venenatis a condimentum vitae sapien pellentesque
            habitant morbi. Viverra tellus in hac habitasse platea dictumst
            vestibulum rhoncus. Id eu nisl nunc mi ipsum faucibus vitae aliquet.
            Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Sit
            amet dictum sit amet. Tincidunt dui ut ornare lectus sit amet est.
            Placerat duis ultricies lacus sed turpis tincidunt id. Dapibus
            ultrices in iaculis nunc. Laoreet id donec ultrices tincidunt. Quis
            hendrerit dolor magna eget est lorem ipsum. Vitae et leo duis ut
            diam. Varius quam quisque id diam vel quam elementum pulvinar etiam.
            Vivamus arcu felis bibendum ut. Neque laoreet suspendisse interdum
            consectetur libero id faucibus nisl tincidunt. Fames ac turpis
            egestas sed tempus. Ut venenatis tellus in metus vulputate eu
            scelerisque. Adipiscing bibendum est ultricies integer quis auctor
            elit. Dui vivamus arcu felis bibendum. Commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Nunc pulvinar sapien et ligula
            ullamcorper. Amet dictum sit amet justo. Amet venenatis urna cursus
            eget nunc scelerisque viverra mauris in. Nec nam aliquam sem et
            tortor. Nulla facilisi cras fermentum odio. Sed viverra tellus in
            hac habitasse platea dictumst vestibulum rhoncus. Massa tincidunt
            dui ut ornare lectus. At consectetur lorem donec massa sapien
            faucibus. Aliquam purus sit amet luctus venenatis lectus magna
            fringilla. Non diam phasellus vestibulum lorem sed risus ultricies.
            Orci a scelerisque purus semper eget duis at tellus at. Quis vel
            eros donec ac odio tempor. Cras pulvinar mattis nunc sed blandit
            libero volutpat sed. Sit amet venenatis urna cursus eget nunc
            scelerisque viverra mauris. Mauris commodo quis imperdiet massa
            tincidunt nunc pulvinar sapien. Id consectetur purus ut faucibus
            pulvinar elementum integer enim neque. Sit amet mauris commodo quis
            imperdiet. Dictumst quisque sagittis purus sit amet volutpat
            consequat. Congue quisque egestas diam in arcu cursus euismod quis
            viverra. Urna id volutpat lacus laoreet non. Enim nec dui nunc
            mattis enim. Euismod lacinia at quis risus sed vulputate. Laoreet id
            donec ultrices tincidunt arcu non sodales. Dignissim convallis
            aenean et tortor at risus viverra adipiscing. Nunc vel risus commodo
            viverra. Diam quis enim lobortis scelerisque fermentum dui. Integer
            quis auctor elit sed vulputate mi. Mattis vulputate enim nulla
            aliquet. Integer vitae justo eget magna fermentum. Tellus mauris a
            diam maecenas. Egestas sed tempus urna et pharetra. Vel facilisis
            volutpat est velit egestas dui. Id porta nibh venenatis cras sed
            felis eget velit. Pharetra magna ac placerat vestibulum lectus
            mauris ultrices eros in. Tristique senectus et netus et malesuada
            fames ac turpis. Suspendisse sed nisi lacus sed viverra tellus in
            hac habitasse. Arcu dictum varius duis at consectetur lorem.
            Venenatis cras sed felis eget velit aliquet sagittis. Felis bibendum
            ut tristique et egestas. Bibendum est ultricies integer quis.
            Malesuada fames ac turpis egestas sed tempus urna. Tellus rutrum
            tellus pellentesque eu tincidunt. Morbi blandit cursus risus at
            ultrices mi. Facilisi etiam dignissim diam quis. Auctor eu augue ut
            lectus arcu bibendum at varius vel. Vel pretium lectus quam id leo
            in vitae turpis. Quisque egestas diam in arcu cursus euismod quis
            viverra nibh. In dictum non consectetur a erat nam at. Tincidunt id
            aliquet risus feugiat in. Dictum fusce ut placerat orci nulla
            pellentesque. Adipiscing elit duis tristique sollicitudin. Facilisi
            etiam dignissim diam quis enim lobortis. Tristique senectus et netus
            et malesuada fames. Eget mauris pharetra et ultrices neque ornare
            aenean. Donec massa sapien faucibus et molestie. A condimentum vitae
            sapien pellentesque habitant morbi. Lacus sed turpis tincidunt id
            aliquet risus. Risus ultricies tristique nulla aliquet enim tortor.
            Neque convallis a cras semper auctor neque vitae. Vel pretium lectus
            quam id leo in vitae. Nibh cras pulvinar mattis nunc sed blandit. A
            diam sollicitudin tempor id. Gravida in fermentum et sollicitudin ac
            orci phasellus. Quam lacus suspendisse faucibus interdum posuere
            lorem ipsum. Sollicitudin nibh sit amet commodo nulla. Tellus
            molestie nunc non blandit. Tellus in metus vulputate eu scelerisque
            felis imperdiet. Aliquet sagittis id consectetur purus ut faucibus
            pulvinar. Quis vel eros donec ac odio. Sed egestas egestas fringilla
            phasellus. Purus non enim praesent elementum facilisis leo vel
            fringilla est. Ipsum dolor sit amet consectetur adipiscing elit
            pellentesque habitant morbi. Lacus sed turpis tincidunt id aliquet.
            Arcu vitae elementum curabitur vitae nunc. Enim neque volutpat ac
            tincidunt vitae semper quis lectus nulla. Lorem mollis aliquam ut
            porttitor leo. Mi in nulla posuere sollicitudin aliquam. Dapibus
            ultrices in iaculis nunc sed. Sed cras ornare arcu dui vivamus arcu
            felis. Mattis ullamcorper velit sed ullamcorper. Lacinia at quis
            risus sed. Donec ac odio tempor orci dapibus ultrices in iaculis.
            Nulla posuere sollicitudin aliquam ultrices sagittis orci. Sed
            egestas egestas fringilla phasellus faucibus. Viverra nam libero
            justo laoreet sit amet cursus. Quis lectus nulla at volutpat diam ut
            venenatis tellus in. Tortor pretium viverra suspendisse potenti
            nullam ac tortor. Vestibulum sed arcu non odio euismod lacinia at.
            Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Sed
            cras ornare arcu dui vivamus. Vulputate odio ut enim blandit
            volutpat. Pretium aenean pharetra magna ac placerat vestibulum
            lectus. Sit amet venenatis urna cursus. Pharetra magna ac placerat
            vestibulum lectus mauris ultrices. Integer enim neque volutpat ac
            tincidunt vitae semper quis lectus. In metus vulputate eu
            scelerisque felis. Et netus et malesuada fames ac turpis egestas.
            Bibendum est ultricies integer quis auctor elit. Ligula ullamcorper
            malesuada proin libero. Pulvinar neque laoreet suspendisse interdum
            consectetur. Vitae turpis massa sed elementum tempus egestas sed
            sed. In iaculis nunc sed augue lacus viverra. Hac habitasse platea
            dictumst quisque sagittis purus sit amet. Id venenatis a condimentum
            vitae sapien pellentesque habitant morbi. Massa eget egestas purus
            viverra accumsan in nisl. Fringilla urna porttitor rhoncus dolor
            purus. Vivamus arcu felis bibendum ut tristique et egestas quis.
            Nunc mattis enim ut tellus elementum sagittis. Tristique et egestas
            quis ipsum. Tincidunt arcu non sodales neque sodales ut etiam.
            Consectetur libero id faucibus nisl tincidunt. Semper eget duis at
            tellus at. Ac orci phasellus egestas tellus. Venenatis tellus in
            metus vulputate eu scelerisque felis imperdiet. Duis ut diam quam
            nulla porttitor massa id neque. Sit amet consectetur adipiscing elit
            duis tristique. Tellus orci ac auctor augue. Aliquet nec ullamcorper
            sit amet risus nullam. Tellus in hac habitasse platea dictumst
            vestibulum. Auctor urna nunc id cursus metus aliquam eleifend mi.
            Tellus in metus vulputate eu. Id cursus metus aliquam eleifend mi
            in. Egestas egestas fringilla phasellus faucibus scelerisque.
            Bibendum est ultricies integer quis auctor. Lacus suspendisse
            faucibus interdum posuere lorem. Elit eget gravida cum sociis
            natoque penatibus. Purus in massa tempor nec feugiat nisl pretium
            fusce id. Ipsum dolor sit amet consectetur adipiscing. Nisi lacus
            sed viverra tellus. Accumsan lacus vel facilisis volutpat est velit
            egestas dui. Nunc vel risus commodo viverra. Duis at consectetur
            lorem donec massa sapien faucibus. Nunc consequat interdum varius
            sit. Netus et malesuada fames ac turpis egestas. Arcu bibendum at
            varius vel pharetra. Eros in cursus turpis massa. Tempus urna et
            pharetra pharetra massa massa. Vitae semper quis lectus nulla at.
            Volutpat maecenas volutpat blandit aliquam. Tortor aliquam nulla
            facilisi cras fermentum odio eu feugiat. In tellus integer feugiat
            scelerisque varius morbi enim nunc. Velit scelerisque in dictum non
            consectetur a erat. Feugiat scelerisque varius morbi enim. Gravida
            rutrum quisque non tellus orci ac. Ipsum suspendisse ultrices
            gravida dictum fusce ut placerat orci nulla. Cursus metus aliquam
            eleifend mi in nulla posuere sollicitudin aliquam. Mauris nunc
            congue nisi vitae suscipit. Massa massa ultricies mi quis hendrerit
            dolor magna. Hendrerit gravida rutrum quisque non tellus orci ac.
            Feugiat scelerisque varius morbi enim. Ut tellus elementum sagittis
            vitae et leo. Est ante in nibh mauris cursus mattis. Vivamus arcu
            felis bibendum ut tristique. Iaculis nunc sed augue lacus viverra
            vitae. Quis eleifend quam adipiscing vitae. Cursus in hac habitasse
            platea dictumst quisque sagittis purus. Elementum pulvinar etiam non
            quam lacus suspendisse. Mauris vitae ultricies leo integer malesuada
            nunc vel. Eget nunc lobortis mattis aliquam faucibus purus in massa.
            Rhoncus dolor purus non enim praesent. Bibendum at varius vel
            pharetra vel turpis. Diam phasellus vestibulum lorem sed risus. Id
            eu nisl nunc mi ipsum faucibus vitae aliquet. Pretium fusce id velit
            ut tortor pretium. Orci ac auctor augue mauris. Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo urna. Dui nunc mattis
            enim ut tellus elementum sagittis. Sollicitudin nibh sit amet
            commodo nulla. Ut eu sem integer vitae justo eget magna fermentum.
          </p>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
export default Example;

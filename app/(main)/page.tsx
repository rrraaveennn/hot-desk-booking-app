import Image from "next/image";
import { getSession } from "../api/auth/[...nextauth]/route";
import { signIn } from "next-auth/react";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="p-6 bg-slate-100">
      <h1>Hello {session?.user.firstName}!</h1>
      {!session?.user ? <SignInButton provider="google" /> : <SignOutButton />}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi
        ex aliquid quod deserunt, nulla sequi veniam suscipit earum magnam
        voluptates fugiat accusantium assumenda, harum mollitia, ullam illum
        quis eveniet? Enim aut saepe debitis, autem quos sit aperiam vitae fuga
        expedita, sequi totam cumque, obcaecati voluptate perspiciatis eligendi
        maxime. Voluptates in perferendis aliquam voluptatum deserunt minus
        aperiam aspernatur, sequi fuga! Suscipit tempore voluptates culpa eum
        placeat laudantium, voluptatem, nihil saepe doloremque consequatur
        eveniet consequuntur nobis. Deleniti illum, rerum dolores a quos
        recusandae eius nobis laudantium. Commodi dicta rerum non vel. Maiores
        autem obcaecati deserunt mollitia rem necessitatibus incidunt minus odio
        quaerat laborum. Praesentium nulla ab alias. Inventore obcaecati nemo
        repellat assumenda et, autem nisi voluptate iste illum incidunt quisquam
        ab! Qui repudiandae, natus voluptates nobis libero tenetur itaque
        inventore, tempora doloremque ab temporibus! Excepturi corrupti dolorem
        saepe reprehenderit rerum, incidunt hic illo eius quae quia libero
        recusandae repellendus, id fugit! Architecto numquam id ipsum est
        officiis eum maiores placeat consectetur animi odio rem hic, doloribus
        adipisci dolore itaque quam asperiores qui dolores! Voluptatibus, magni
        voluptate alias cum tempore enim aliquam. Perspiciatis id perferendis
        cumque dolorum rem dolorem corrupti impedit velit provident molestias
        illo doloribus laudantium, at consectetur, quia quam dolore laboriosam
        non eveniet iusto quidem. Pariatur atque fugiat incidunt quaerat.
        Recusandae, vero cumque maiores suscipit magni, voluptatum, non
        necessitatibus similique temporibus veritatis ipsam obcaecati libero
        deserunt nam! Numquam, quisquam nobis. Porro magni sed vitae assumenda
        eveniet. Hic harum excepturi ullam? Cum, a culpa. Aliquid magnam
        reiciendis dolore? Perferendis corrupti qui illum? Perspiciatis tempora
        vitae ut ab dignissimos aliquid at adipisci labore ratione praesentium,
        est excepturi iste nesciunt officiis, dolore repellat. Dolorum maxime
        labore illo eveniet explicabo voluptate dolore earum aperiam ex, quae
        doloribus eius nihil ipsum, molestiae molestias magnam. Et accusantium
        soluta quo voluptatibus eligendi quisquam dolorum perferendis laudantium
        ducimus. Repellat earum aliquam tenetur dolores, exercitationem quod
        voluptatem delectus debitis tempora excepturi totam quia, sapiente quos
        perspiciatis aperiam? Nam laborum laboriosam dolorum reiciendis
        corporis. Eos explicabo quia cum corporis pariatur! Ullam optio
        adipisci, repellat impedit ipsam vero vel pariatur totam iusto odio
        quidem sequi! Quos similique veritatis quis ullam mollitia a, voluptatum
        ipsam aut qui ab iste dignissimos, aperiam molestiae. Repellendus
        accusamus optio veniam alias quos natus nulla dolorem dolorum a laborum
        blanditiis repellat commodi, et accusantium vitae unde minus earum id
        voluptatem? Illum at pariatur beatae voluptate doloremque distinctio.
        Eius eaque nobis recusandae earum. Necessitatibus assumenda, debitis
        earum at repellat asperiores voluptas unde repudiandae ex! Tempora
        reiciendis iste unde in! Cupiditate recusandae porro magnam repudiandae
        iure. Nostrum, doloremque ipsa. Quam quo iste modi soluta illum maxime
        praesentium fuga velit doloribus beatae fugit repellendus magni quasi
        necessitatibus odit error quidem, nesciunt molestiae omnis rem? Libero
        dignissimos repellendus sint sunt perspiciatis? Dolorem nulla veniam id
        inventore incidunt eaque dolorum molestias voluptatem nostrum
        blanditiis! Aliquam illum, qui officiis ipsam doloremque, optio impedit
        quisquam itaque, molestiae accusamus minus unde et ipsa tenetur
        aspernatur? Officiis culpa adipisci repudiandae, nisi laboriosam nam
        esse tempora minima, aperiam facere laudantium molestiae laborum
        excepturi at inventore sit dolore recusandae consequuntur suscipit
        pariatur in similique eveniet iure asperiores. Explicabo! Neque ipsum
        blanditiis unde laboriosam consectetur, numquam dolores doloremque
        voluptatum, labore pariatur sint eligendi iste quos accusantium
        molestiae. Iusto iste sit vero dolorem placeat culpa aspernatur
        molestiae quaerat eum nesciunt. Reiciendis, dolorem? Fugiat, molestias.
        Culpa nemo voluptas earum dolorum, hic repudiandae, laborum quod
        voluptate asperiores delectus voluptatum dolorem ipsum officia? Nisi
        beatae suscipit est ducimus eius culpa nihil inventore rerum! Mollitia
        tempore, cum sint accusantium beatae voluptas ipsum ex unde qui vero
        eligendi odio dolor corporis quod, aspernatur, dolore dolores ab sit!
        Est nostrum consequatur repudiandae ea deserunt ex numquam? Esse ex
        maiores voluptas fuga enim magni. Officiis eum fuga aspernatur. Laborum,
        deserunt incidunt eaque quis nam culpa voluptatibus, ipsam mollitia non
        dolorem quo veritatis tempora ea labore eum doloribus. Ipsum aut
        voluptas fugiat odio pariatur repellendus porro quasi, dignissimos dicta
        quaerat, rem eaque soluta amet adipisci libero, molestias ducimus quod
        alias modi maxime cupiditate quis. Quae corporis libero tenetur.
        Voluptatibus, tenetur. Ad inventore tenetur, cumque in aspernatur
        voluptates quos quae adipisci, nesciunt sit molestias? Neque, sunt
        incidunt. Expedita reprehenderit laborum quae! Consectetur perspiciatis,
        officiis magnam quasi non rem enim? Laudantium eum omnis beatae
        doloremque, suscipit excepturi maiores est nostrum eius adipisci hic
        incidunt. Nihil, voluptatum deleniti totam, dignissimos non, quam culpa
        blanditiis ab sequi labore ducimus perspiciatis libero eaque? Officia
        aliquid illum perferendis reprehenderit, repudiandae soluta. Temporibus
        ducimus dolores nulla error debitis, dolore aut quidem quia saepe
        tenetur nihil at rem reprehenderit, maiores repellendus totam
        consequatur unde. Sint, in. Nulla natus doloremque minima soluta rerum
        illo consectetur. Ipsa possimus voluptates rem minus officiis, qui sint
        quisquam autem minima? Molestiae totam pariatur dolorem dolor veniam,
        ratione porro quisquam mollitia cumque? Excepturi molestiae quos error
        sapiente tenetur doloribus dicta corporis numquam vitae nihil ad, iste
        tempora distinctio hic nulla officiis rem dolorem delectus. Minima
        commodi fugit harum magni cum, et dolorem! Optio eum distinctio expedita
        vitae similique, architecto alias ad ipsum sequi, aut eaque corrupti!
        Minima doloribus maiores et, a similique autem quae at numquam, quaerat
        fuga tempora nostrum sapiente ab? Tenetur quos blanditiis dicta in et
        itaque, aliquam eos, repellendus eligendi, veniam non a doloribus.
        Maxime sapiente placeat quo, deserunt blanditiis temporibus qui quaerat
        facere maiores architecto illo nihil a! Beatae quas autem iusto,
        dignissimos quos ut inventore necessitatibus mollitia odit ex a.
        Voluptatibus laborum sint itaque maiores dolores quia! Iure quam
        consectetur molestias et id ratione temporibus commodi adipisci! Qui
        dolorum voluptas, quidem tempora illo, esse facere mollitia odit autem
        neque error repellendus, itaque odio quibusdam saepe dicta quod
        nesciunt! A rem omnis adipisci officiis illo porro expedita
        perspiciatis? Optio, repellat quae? Suscipit consectetur quaerat debitis
        non optio vero? Doloremque, temporibus numquam totam repudiandae eum
        nihil error architecto maxime vitae ipsum adipisci ab dolores soluta
        beatae dolore, explicabo magnam. Ab esse cupiditate nostrum id. Illo
        rerum repellendus nemo minus voluptatum culpa inventore cupiditate iure
        odio nostrum. Tenetur dolor sint et. Beatae deleniti facere ipsum,
        explicabo soluta error inventore rem. Id soluta exercitationem
        perferendis ut vitae accusantium autem tempore dolores possimus! Eum sed
        eos aliquam porro impedit, magnam quas dolore accusamus cum tenetur
        fugit non ad voluptates totam corrupti! Doloribus. Neque quia unde nisi
        provident. Consequatur adipisci modi repellat sequi nemo vel eaque nobis
        unde enim magnam ratione reprehenderit beatae accusamus aspernatur
        eveniet dicta, praesentium consequuntur aliquid inventore! Harum, optio?
        Eligendi, alias quo! Rem vel doloremque corporis laborum commodi. Libero
        repudiandae perspiciatis voluptate ipsam omnis ipsum blanditiis,
        voluptatem itaque quam illum quidem ullam distinctio consequuntur saepe
        soluta nulla ipsa cumque? Libero hic id consectetur aliquam a. Corporis,
        odio molestias modi cupiditate quisquam quo numquam. Corporis fugiat
        eligendi asperiores blanditiis delectus voluptatum vero quae esse
        dolorem? Enim ea delectus rem distinctio? Veritatis autem nulla velit
        quia soluta tempore, cum in repellat deleniti animi possimus dolorum
        voluptas quaerat, perferendis temporibus porro repudiandae, id
        accusantium aspernatur optio. Officia blanditiis dolor sapiente
        temporibus sequi! Consequuntur voluptas voluptatibus exercitationem
        magnam deleniti consectetur impedit vel quos voluptatem? Vero, magnam.
        Provident similique natus nihil ex, ut illo, perspiciatis odit rem
        laborum blanditiis exercitationem totam nulla dolorum error. Nisi
        doloremque accusantium impedit pariatur rem, sunt ullam quas vel magni
        dolor? Est nostrum reprehenderit nihil libero consequatur ipsam
        blanditiis ullam saepe, rem quisquam neque molestias vitae sequi
        sapiente. Laudantium? Sapiente pariatur omnis architecto velit id nam,
        officiis accusamus nesciunt laudantium, unde recusandae cum dolore modi
        amet quia veniam dignissimos debitis deleniti placeat? Voluptatibus
        fugit blanditiis minima, iure dolorem dignissimos! Veniam voluptates
        quia obcaecati deserunt vero? Mollitia, commodi maiores. Error iure
        eligendi praesentium nostrum cupiditate. Dolore earum veniam facilis
        nobis eveniet optio, nostrum assumenda odio accusantium enim labore
        magnam ea! Sequi est excepturi, temporibus unde ad, similique sed labore
        dignissimos velit minima placeat dolores magni impedit incidunt? Quo
        quae quia iure blanditiis minus vel, aut illum expedita quos! Doloribus,
        sed. Veniam magni maiores labore ipsa vitae pariatur omnis ex voluptate,
        saepe provident atque incidunt officiis laboriosam sapiente quis laborum
        animi in facere nesciunt tempore dolore expedita! Architecto tempora
        dignissimos suscipit? Aspernatur repudiandae tenetur facere maiores
        accusamus unde voluptatibus corporis, neque est atque aliquam libero.
        Quas, hic eum quis ipsam, rem modi, neque officia tempore repellendus
        dolorem odio ratione consequatur quam! Perferendis inventore ea nobis
        vitae enim nostrum magni eum, totam, ut aliquam unde vel sunt blanditiis
        dolores numquam minus, maiores quisquam. Cum rem, deserunt autem ad
        dolore voluptas aliquid. Quam. Ducimus ab inventore illum itaque error
        laudantium, corporis repellat perferendis vitae quibusdam alias minima
        accusantium magnam facilis debitis omnis dolorem totam voluptate
        dolores, quod optio delectus repudiandae rem eveniet? Blanditiis. Sint
        animi eius a similique facere, dolorum recusandae, expedita
        exercitationem quasi, at suscipit? Quisquam deserunt perspiciatis
        explicabo officia delectus facilis cupiditate harum porro doloremque
        consectetur inventore, earum libero. Obcaecati, a. Autem beatae itaque
        aut deserunt veniam velit maiores laudantium rerum quasi doloribus,
        molestiae mollitia officiis, dolorum accusantium esse eum? Earum commodi
        vel laudantium esse! Corrupti ratione hic dolores optio qui. Soluta
        consectetur perspiciatis nemo minus dolorum voluptatem vel vitae
        asperiores cum velit quis ea veritatis corrupti culpa, earum id quam
        doloribus fugit itaque, delectus nam impedit similique. Quae, nobis
        quidem!
      </p>
    </div>
  );
}

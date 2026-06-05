export type Category = 'Abstraksjon' | 'Lys og natur' | 'Nært og Kjært' | 'Alle';

export interface Painting {
  id: string;
  title: string;
  image: string;
  category: Category;
  year?: string;
  medium?: string;
  dimensions?: string;
}

export const paintings: Painting[] = [
  // 2026
  { id: '1', title: 'Møllafossen', image: '/images/img_5407.jpeg', category: 'Lys og natur' },
  { id: '2', title: 'Snart blåtime på Varden', image: '/images/snart_blatime_pa_varden_v2.jpg', category: 'Lys og natur' },
  { id: '3', title: 'Svaner i desember sol', image: '/images/img_0072.jpeg', category: 'Lys og natur' },
  { id: '4', title: 'Frognerbekken', image: '/images/img_0068.jpeg', category: 'Lys og natur' },
  { id: '5', title: 'Sigyns gate', image: '/images/img_0067.jpeg', category: 'Nært og Kjært' },
  { id: '6', title: 'Sommertur på Hvaler', image: '/images/img_9780.jpeg', category: 'Lys og natur' },
  { id: '8', title: 'Selvportrett', image: '/images/img_4376.jpeg', category: 'Abstraksjon' },
  { id: '9', title: 'Stilleben med sitroner', image: '/images/img_3771.jpeg', category: 'Abstraksjon' },
  { id: '47', title: 'Kjærsten', image: '/images/kjaersten.jpg', category: 'Nært og Kjært' },
  // 2025
  { id: '10', title: 'Marokko', image: '/images/marokko.jpg', category: 'Lys og natur' },
  { id: '11', title: 'Midnattsol i Lofoten', image: '/images/img_9421.jpeg', category: 'Lys og natur' },
  { id: '12', title: 'Zermatters', image: '/images/img_6650.jpeg', category: 'Lys og natur' },
  { id: '13', title: 'Slava Ukraina', image: '/images/img_9204.jpeg', category: 'Alle' },
  { id: '14', title: 'Over Slagfjellet', image: '/images/img_9158.jpeg', category: 'Lys og natur' },
  { id: '15', title: 'Gutta på haugen', image: '/images/img_9103.jpeg', category: 'Nært og Kjært' },
  { id: '16', title: 'Snoopy i snøen', image: '/images/img_8806.jpeg', category: 'Nært og Kjært' },
  { id: '17', title: 'Skihopp', image: '/images/skihopp.jpg', category: 'Lys og natur' },
  { id: '18', title: 'Kvitfjell solnedgang', image: '/images/img_8407.jpeg', category: 'Lys og natur' },
  { id: '20', title: 'Morgenbad på Røst', image: '/images/bad_pa_rost.jpg', category: 'Lys og natur' },
  { id: '21', title: 'Skilek', image: '/images/skilek.jpg', category: 'Lys og natur' },
  { id: '23', title: 'Emily og Nicho med Oda', image: '/images/en_med_oda.jpg', category: 'Nært og Kjært' },
  { id: '24', title: 'Utsikt fra Veslefjellet', image: '/images/img_6437.jpeg', category: 'Lys og natur' },
  { id: '25', title: 'Akerselva', image: '/images/img_8248.jpeg', category: 'Lys og natur' },
  { id: '26', title: 'Flokk', image: '/images/img_8027.jpeg', category: 'Lys og natur' },
  { id: '27', title: 'Trenyken', image: '/images/img_6869.jpeg', category: 'Lys og natur' },
  { id: '28', title: 'Korsika fjell', image: '/images/korsika_fjell.jpg', category: 'Lys og natur' },
  { id: '29', title: 'Kvitfjell desember II', image: '/images/kvitfjell_desember_ii.jpg', category: 'Lys og natur' },
  { id: '31', title: 'Frognerelva', image: '/images/frognerbekken.jpg', category: 'Lys og natur' },
  { id: '32', title: 'Veslesetra', image: '/images/veslesetra.jpg', category: 'Lys og natur' },
  { id: '36', title: 'Kvitfjell desember', image: '/images/kvitfjell_desember.jpg', category: 'Lys og natur' },
  // 2024
  { id: '41', title: 'Stilleben karaffel', image: '/images/stilleben_karaffel.jpg', category: 'Abstraksjon' },
  { id: '42', title: 'Nyttårsaften', image: '/images/img_0067_2.jpeg', category: 'Nært og Kjært' },
  { id: '43', title: 'Nattbad', image: '/images/img_0912.jpeg', category: 'Lys og natur' },
  { id: '44', title: 'Vinter i nordmarka', image: '/images/img_4483.jpeg', category: 'Abstraksjon' },
  // Older
  { id: '46', title: 'Selvportrett', image: '/images/img_9752.jpeg', category: 'Abstraksjon' },
];

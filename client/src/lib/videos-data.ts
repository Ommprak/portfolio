export interface VideoItem {
  id: string;
  publicId: string;
  title: string;
}

const cloudName = 'dbdnjaewg';

const rawVideos: { publicId: string; title: string }[] = [
  { publicId: 'Khaas_india_Reel_1_APR_kibuqz', title: 'Khaas India Reel — April' },
  { publicId: '16_Mar_khaas_india_reel_mgdg2r', title: 'Khaas India Reel — 16 March' },
  { publicId: 'final_9_jukmvg', title: 'Final Cut 9' },
  { publicId: 'Khaas_india_video_4_rzlvvw', title: 'Khaas India Video 4' },
  { publicId: 'bride_full_invitation_gjjqbf', title: 'Bride Full Invitation' },
  { publicId: 'Khaas_world_video_2_g5fiun', title: 'Khaas World Video 2' },
  { publicId: 'Khaas_World_video_3_z0ffwt', title: 'Khaas World Video 3' },
  { publicId: 'Frankfinn_Reel_6.1_tih0xh', title: 'Frankfinn Reel 6.1' },
  { publicId: 'disposal_reel_8_oqfvyj', title: 'Disposal Reel 8' },
  { publicId: '3_AprDisposal_walaa_llzmv2', title: 'Disposal Wala — 3 April' },
  { publicId: '21_feb_DW_reel_cyvyar', title: 'DW Reel — 21 February' },
  { publicId: 'zonuts_video_feb_1_ekcpne', title: 'Zonuts Video — February' },
  { publicId: '18_Mar_Mohini_uf01iw', title: 'Mohini — 18 March' },
  { publicId: 'zonuts_reel_2_hgppjc', title: 'Zonuts Reel 2' },
  { publicId: 'Khaas_world_video_2_bj0zxf', title: 'Khaas World Video 2 (Alt)' },
  { publicId: 'zonuts_reel_3_jbymrf', title: 'Zonuts Reel 3' },
  { publicId: 'rhb_maxx_3_hrn01a', title: 'RHB Maxx 3' },
  { publicId: 'khaas_india_16_feb_xrop4x', title: 'Khaas India — 16 February' },
  { publicId: 'Khaas_World_Reel_4_APR_aszqek', title: 'Khaas World Reel 4 — April' },
  { publicId: 'khaas_india_reel_3.1_quyvno', title: 'Khaas India Reel 3.1' },
  { publicId: 'khaas_dubai_event_yeexgj', title: 'Khaas Dubai Event' },
  { publicId: 'final_can_video_khaas_india_lk89xb', title: 'Khaas India — Final Can Video' },
  { publicId: 'insprire_uuyn1f', title: 'Inspire' },
  { publicId: '26_feb_DW_reel_1.1_fg6rgk', title: 'DW Reel 1.1 — 26 February' },
  { publicId: '26_Mar_Mohini_a8sbd8', title: 'Mohini — 26 March' },
  { publicId: '25_dw_reel_xsa5tm', title: 'DW Reel — 25' },
  { publicId: '25_Mar_OM_MARMO__1_htixbt', title: 'OM Marmo — 25 March' },
  { publicId: '04_Mar_Paam_Reel_xvcqcf', title: 'Paam Reel — 4 March' },
  { publicId: '2_Mar_BPP_reel_dfovd0', title: 'BPP Reel — 2 March' },
  { publicId: '12_mar_mohini_reel_iw8esm', title: 'Mohini Reel — 12 March' },
  { publicId: 'zonuts_reel_7_dgor6z', title: 'Zonuts Reel 7' },
  { publicId: 'zonuts_reel_6_jan_v5tqcg', title: 'Zonuts Reel 6 — January' },
  { publicId: 'khaas_world_video_3_ekerzl', title: 'Khaas World Video 3 (Alt)' },
  { publicId: 'zonut_reel_3_qxav38', title: 'Zonut Reel 3' },
  { publicId: 'zonuts_reel_13_6_vztesq', title: 'Zonuts Reel 13.6' },
  { publicId: 'zonut_video_1_u1b1zm', title: 'Zonut Video 1' },
  { publicId: 'Sequence_01_1_jpe4qo', title: 'Sequence 01' },
  { publicId: '27_Mar_Mohini_1_gzevai', title: 'Mohini 1 — 27 March' },
  { publicId: '21_Mar_Paam_reel_epw7n5', title: 'Paam Reel — 21 March' },
  { publicId: '2_jan_zonuts_reel_uwjquv', title: 'Zonuts Reel — 2 January' },
  { publicId: '21_feb_DW_reel_2_kekawj', title: 'DW Reel 2 — 21 February' },
  { publicId: '17_jan_video__3_n0nu6p', title: 'Video 3 — 17 January' },
];

export const videos: VideoItem[] = rawVideos.map((v, i) => ({
  id: String(i + 1),
  publicId: v.publicId,
  title: v.title,
}));

export function getVideoEmbedUrl(publicId: string, autoplay = false): string {
  const base = `https://player.cloudinary.com/embed/?cloud_name=${cloudName}&public_id=${publicId}&player[muted]=true&player[loop]=true&player[controls]=true`;
  return autoplay ? `${base}&player[autoplay]=true&player[autoplayMode]=always` : base;
}

﻿/********************* 
 * Symmetryspan Test *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SymmetrySpan';  // from the Builder filename that created this script
let expInfo = {
    'Jelige': '',
    'Születési évszám': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(wlc_0RoutineBegin());
flowScheduler.add(wlc_0RoutineEachFrame());
flowScheduler.add(wlc_0RoutineEnd());
flowScheduler.add(GSQS1RoutineBegin());
flowScheduler.add(GSQS1RoutineEachFrame());
flowScheduler.add(GSQS1RoutineEnd());
flowScheduler.add(GSQS2RoutineBegin());
flowScheduler.add(GSQS2RoutineEachFrame());
flowScheduler.add(GSQS2RoutineEnd());
flowScheduler.add(GSQS3RoutineBegin());
flowScheduler.add(GSQS3RoutineEachFrame());
flowScheduler.add(GSQS3RoutineEnd());
flowScheduler.add(PN_aff_questionsRoutineBegin());
flowScheduler.add(PN_aff_questionsRoutineEachFrame());
flowScheduler.add(PN_aff_questionsRoutineEnd());
flowScheduler.add(PN_aff_questions2RoutineBegin());
flowScheduler.add(PN_aff_questions2RoutineEachFrame());
flowScheduler.add(PN_aff_questions2RoutineEnd());
flowScheduler.add(PN_aff_questions3RoutineBegin());
flowScheduler.add(PN_aff_questions3RoutineEachFrame());
flowScheduler.add(PN_aff_questions3RoutineEnd());
flowScheduler.add(wlcRoutineBegin());
flowScheduler.add(wlcRoutineEachFrame());
flowScheduler.add(wlcRoutineEnd());
flowScheduler.add(ins_square_1RoutineBegin());
flowScheduler.add(ins_square_1RoutineEachFrame());
flowScheduler.add(ins_square_1RoutineEnd());
const trials_square_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_square_2LoopBegin(trials_square_2LoopScheduler));
flowScheduler.add(trials_square_2LoopScheduler);
flowScheduler.add(trials_square_2LoopEnd);
flowScheduler.add(ins_square_endRoutineBegin());
flowScheduler.add(ins_square_endRoutineEachFrame());
flowScheduler.add(ins_square_endRoutineEnd());
flowScheduler.add(MW_questions1RoutineBegin());
flowScheduler.add(MW_questions1RoutineEachFrame());
flowScheduler.add(MW_questions1RoutineEnd());
flowScheduler.add(MW_questions2RoutineBegin());
flowScheduler.add(MW_questions2RoutineEachFrame());
flowScheduler.add(MW_questions2RoutineEnd());
flowScheduler.add(MW_questions3RoutineBegin());
flowScheduler.add(MW_questions3RoutineEachFrame());
flowScheduler.add(MW_questions3RoutineEnd());
flowScheduler.add(next_partRoutineBegin());
flowScheduler.add(next_partRoutineEachFrame());
flowScheduler.add(next_partRoutineEnd());
flowScheduler.add(ins_sym_1RoutineBegin());
flowScheduler.add(ins_sym_1RoutineEachFrame());
flowScheduler.add(ins_sym_1RoutineEnd());
flowScheduler.add(ins_sym_2RoutineBegin());
flowScheduler.add(ins_sym_2RoutineEachFrame());
flowScheduler.add(ins_sym_2RoutineEnd());
flowScheduler.add(ins_sym_3RoutineBegin());
flowScheduler.add(ins_sym_3RoutineEachFrame());
flowScheduler.add(ins_sym_3RoutineEnd());
flowScheduler.add(ins2RoutineBegin());
flowScheduler.add(ins2RoutineEachFrame());
flowScheduler.add(ins2RoutineEnd());
const trials_prac2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_prac2LoopBegin(trials_prac2LoopScheduler));
flowScheduler.add(trials_prac2LoopScheduler);
flowScheduler.add(trials_prac2LoopEnd);
flowScheduler.add(ins_bothRoutineBegin());
flowScheduler.add(ins_bothRoutineEachFrame());
flowScheduler.add(ins_bothRoutineEnd());
const trials_bothLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_bothLoopBegin(trials_bothLoopScheduler));
flowScheduler.add(trials_bothLoopScheduler);
flowScheduler.add(trials_bothLoopEnd);
flowScheduler.add(both_endRoutineBegin());
flowScheduler.add(both_endRoutineEachFrame());
flowScheduler.add(both_endRoutineEnd());
flowScheduler.add(MW_questions1RoutineBegin());
flowScheduler.add(MW_questions1RoutineEachFrame());
flowScheduler.add(MW_questions1RoutineEnd());
flowScheduler.add(MW_questions2RoutineBegin());
flowScheduler.add(MW_questions2RoutineEachFrame());
flowScheduler.add(MW_questions2RoutineEnd());
flowScheduler.add(MW_questions3RoutineBegin());
flowScheduler.add(MW_questions3RoutineEachFrame());
flowScheduler.add(MW_questions3RoutineEnd());
flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/nsym33.JPG', 'path': 'resources/nsym33.JPG'},
    {'name': 'resources/sym31.JPG', 'path': 'resources/sym31.JPG'},
    {'name': 'resources/sym5.JPG', 'path': 'resources/sym5.JPG'},
    {'name': 'resources/nsym23.JPG', 'path': 'resources/nsym23.JPG'},
    {'name': 'resources/nsym52.JPG', 'path': 'resources/nsym52.JPG'},
    {'name': 'resources/nsym42.JPG', 'path': 'resources/nsym42.JPG'},
    {'name': 'resources/nsym68.JPG', 'path': 'resources/nsym68.JPG'},
    {'name': 'resources/sym15.JPG', 'path': 'resources/sym15.JPG'},
    {'name': 'resources/nsym48.JPG', 'path': 'resources/nsym48.JPG'},
    {'name': 'resources/nsym15.JPG', 'path': 'resources/nsym15.JPG'},
    {'name': 'resources/nsym3.JPG', 'path': 'resources/nsym3.JPG'},
    {'name': 'resources/nsym50.JPG', 'path': 'resources/nsym50.JPG'},
    {'name': 'resources/nsym62.JPG', 'path': 'resources/nsym62.JPG'},
    {'name': 'resources/nsym80.JPG', 'path': 'resources/nsym80.JPG'},
    {'name': 'resources/nsym75.JPG', 'path': 'resources/nsym75.JPG'},
    {'name': 'resources/sym28.JPG', 'path': 'resources/sym28.JPG'},
    {'name': 'resources/example2.JPG', 'path': 'resources/example2.JPG'},
    {'name': 'resources/nsym60.JPG', 'path': 'resources/nsym60.JPG'},
    {'name': 'resources/nsym1.JPG', 'path': 'resources/nsym1.JPG'},
    {'name': 'resources/sym56.JPG', 'path': 'resources/sym56.JPG'},
    {'name': 'resources/nsym54.JPG', 'path': 'resources/nsym54.JPG'},
    {'name': 'resources/nsym73.JPG', 'path': 'resources/nsym73.JPG'},
    {'name': 'resources/sym14.JPG', 'path': 'resources/sym14.JPG'},
    {'name': 'resources/sym33.JPG', 'path': 'resources/sym33.JPG'},
    {'name': 'resources/nsym27.JPG', 'path': 'resources/nsym27.JPG'},
    {'name': 'resources/sym48.JPG', 'path': 'resources/sym48.JPG'},
    {'name': 'resources/sym57.JPG', 'path': 'resources/sym57.JPG'},
    {'name': 'resources/nsym37.JPG', 'path': 'resources/nsym37.JPG'},
    {'name': 'resources/sym69.JPG', 'path': 'resources/sym69.JPG'},
    {'name': 'resources/nsym13.JPG', 'path': 'resources/nsym13.JPG'},
    {'name': 'resources/nsym64.JPG', 'path': 'resources/nsym64.JPG'},
    {'name': 'resources/sym21.JPG', 'path': 'resources/sym21.JPG'},
    {'name': 'resources/nsym69.JPG', 'path': 'resources/nsym69.JPG'},
    {'name': 'resources/sym20.JPG', 'path': 'resources/sym20.JPG'},
    {'name': 'resources/nsym43.JPG', 'path': 'resources/nsym43.JPG'},
    {'name': 'resources/sym13.JPG', 'path': 'resources/sym13.JPG'},
    {'name': 'resources/nsym49.JPG', 'path': 'resources/nsym49.JPG'},
    {'name': 'resources/nsym6.JPG', 'path': 'resources/nsym6.JPG'},
    {'name': 'resources/sym53.JPG', 'path': 'resources/sym53.JPG'},
    {'name': 'resources/sym52.JPG', 'path': 'resources/sym52.JPG'},
    {'name': 'resources/sym37.JPG', 'path': 'resources/sym37.JPG'},
    {'name': 'resources/sym3.JPG', 'path': 'resources/sym3.JPG'},
    {'name': 'resources/sym49.JPG', 'path': 'resources/sym49.JPG'},
    {'name': 'resources/nsym36.JPG', 'path': 'resources/nsym36.JPG'},
    {'name': 'resources/sym34.JPG', 'path': 'resources/sym34.JPG'},
    {'name': 'resources/nsym22.JPG', 'path': 'resources/nsym22.JPG'},
    {'name': 'resources/nsym78.JPG', 'path': 'resources/nsym78.JPG'},
    {'name': 'resources/nsym74.JPG', 'path': 'resources/nsym74.JPG'},
    {'name': 'resources/grid.png', 'path': 'resources/grid.png'},
    {'name': 'resources/nsym29.JPG', 'path': 'resources/nsym29.JPG'},
    {'name': 'resources/sym72.JPG', 'path': 'resources/sym72.JPG'},
    {'name': 'resources/sym58.JPG', 'path': 'resources/sym58.JPG'},
    {'name': 'resources/1red.JPG', 'path': 'resources/1red.JPG'},
    {'name': 'resources/nsym17.JPG', 'path': 'resources/nsym17.JPG'},
    {'name': 'resources/sym19.JPG', 'path': 'resources/sym19.JPG'},
    {'name': 'resources/sym70.JPG', 'path': 'resources/sym70.JPG'},
    {'name': 'resources/nsym5.JPG', 'path': 'resources/nsym5.JPG'},
    {'name': 'resources/sym45.JPG', 'path': 'resources/sym45.JPG'},
    {'name': 'resources/sym44.JPG', 'path': 'resources/sym44.JPG'},
    {'name': 'resources/sym23.JPG', 'path': 'resources/sym23.JPG'},
    {'name': 'resources/sym64.JPG', 'path': 'resources/sym64.JPG'},
    {'name': 'resources/nsym35.JPG', 'path': 'resources/nsym35.JPG'},
    {'name': 'resources/sym18.JPG', 'path': 'resources/sym18.JPG'},
    {'name': 'resources/sym77.JPG', 'path': 'resources/sym77.JPG'},
    {'name': 'resources/sym73.JPG', 'path': 'resources/sym73.JPG'},
    {'name': 'resources/sym66.JPG', 'path': 'resources/sym66.JPG'},
    {'name': 'resources/nsym19.JPG', 'path': 'resources/nsym19.JPG'},
    {'name': 'resources/nsym20.JPG', 'path': 'resources/nsym20.JPG'},
    {'name': 'resources/sym59.JPG', 'path': 'resources/sym59.JPG'},
    {'name': 'resources/sym36.JPG', 'path': 'resources/sym36.JPG'},
    {'name': 'resources/nsym24.JPG', 'path': 'resources/nsym24.JPG'},
    {'name': 'resources/nsym58.JPG', 'path': 'resources/nsym58.JPG'},
    {'name': 'resources/sym2.JPG', 'path': 'resources/sym2.JPG'},
    {'name': 'resources/sym17.JPG', 'path': 'resources/sym17.JPG'},
    {'name': 'resources/nsym46.JPG', 'path': 'resources/nsym46.JPG'},
    {'name': 'resources/nsym47.JPG', 'path': 'resources/nsym47.JPG'},
    {'name': 'resources/sym38.JPG', 'path': 'resources/sym38.JPG'},
    {'name': 'resources/sym68.JPG', 'path': 'resources/sym68.JPG'},
    {'name': 'resources/sym78.JPG', 'path': 'resources/sym78.JPG'},
    {'name': 'resources/sym11.JPG', 'path': 'resources/sym11.JPG'},
    {'name': 'resources/sym9.JPG', 'path': 'resources/sym9.JPG'},
    {'name': 'resources/sym25.JPG', 'path': 'resources/sym25.JPG'},
    {'name': 'resources/nsym53.JPG', 'path': 'resources/nsym53.JPG'},
    {'name': 'resources/nsym55.JPG', 'path': 'resources/nsym55.JPG'},
    {'name': 'resources/sym32.JPG', 'path': 'resources/sym32.JPG'},
    {'name': 'resources/sym76.JPG', 'path': 'resources/sym76.JPG'},
    {'name': 'resources/sym50.JPG', 'path': 'resources/sym50.JPG'},
    {'name': 'resources/nsym11.JPG', 'path': 'resources/nsym11.JPG'},
    {'name': 'resources/nsym14.JPG', 'path': 'resources/nsym14.JPG'},
    {'name': 'resources/nsym16.JPG', 'path': 'resources/nsym16.JPG'},
    {'name': 'resources/nsym34.JPG', 'path': 'resources/nsym34.JPG'},
    {'name': 'resources/nsym79.JPG', 'path': 'resources/nsym79.JPG'},
    {'name': 'resources/sym43.JPG', 'path': 'resources/sym43.JPG'},
    {'name': 'resources/1green.JPG', 'path': 'resources/1green.JPG'},
    {'name': 'resources/nsym7.JPG', 'path': 'resources/nsym7.JPG'},
    {'name': 'resources/nsym77.JPG', 'path': 'resources/nsym77.JPG'},
    {'name': 'resources/sym26.JPG', 'path': 'resources/sym26.JPG'},
    {'name': 'resources/nsym4.JPG', 'path': 'resources/nsym4.JPG'},
    {'name': 'resources/nsym10.JPG', 'path': 'resources/nsym10.JPG'},
    {'name': 'resources/nsym56.JPG', 'path': 'resources/nsym56.JPG'},
    {'name': 'resources/nsym65.JPG', 'path': 'resources/nsym65.JPG'},
    {'name': 'resources/sym80.JPG', 'path': 'resources/sym80.JPG'},
    {'name': 'resources/nsym61.JPG', 'path': 'resources/nsym61.JPG'},
    {'name': 'resources/sym39.JPG', 'path': 'resources/sym39.JPG'},
    {'name': 'resources/sym35.JPG', 'path': 'resources/sym35.JPG'},
    {'name': 'resources/nsym28.JPG', 'path': 'resources/nsym28.JPG'},
    {'name': 'resources/nsym39.JPG', 'path': 'resources/nsym39.JPG'},
    {'name': 'resources/nsym32.JPG', 'path': 'resources/nsym32.JPG'},
    {'name': 'resources/sym55.JPG', 'path': 'resources/sym55.JPG'},
    {'name': 'resources/sym47.JPG', 'path': 'resources/sym47.JPG'},
    {'name': 'resources/sym4.JPG', 'path': 'resources/sym4.JPG'},
    {'name': 'resources/sym61.JPG', 'path': 'resources/sym61.JPG'},
    {'name': 'resources/sym27.JPG', 'path': 'resources/sym27.JPG'},
    {'name': 'resources/sym8.JPG', 'path': 'resources/sym8.JPG'},
    {'name': 'resources/nsym57.JPG', 'path': 'resources/nsym57.JPG'},
    {'name': 'resources/sym6.JPG', 'path': 'resources/sym6.JPG'},
    {'name': 'resources/sym60.JPG', 'path': 'resources/sym60.JPG'},
    {'name': 'resources/nsym63.JPG', 'path': 'resources/nsym63.JPG'},
    {'name': 'resources/nsym71.JPG', 'path': 'resources/nsym71.JPG'},
    {'name': 'resources/sym74.JPG', 'path': 'resources/sym74.JPG'},
    {'name': 'resources/sym79.JPG', 'path': 'resources/sym79.JPG'},
    {'name': 'resources/sym41.JPG', 'path': 'resources/sym41.JPG'},
    {'name': 'resources/sym24.JPG', 'path': 'resources/sym24.JPG'},
    {'name': 'resources/nsym51.JPG', 'path': 'resources/nsym51.JPG'},
    {'name': 'resources/sym51.JPG', 'path': 'resources/sym51.JPG'},
    {'name': 'resources/nsym67.JPG', 'path': 'resources/nsym67.JPG'},
    {'name': 'resources/nsym72.JPG', 'path': 'resources/nsym72.JPG'},
    {'name': 'resources/sym62.JPG', 'path': 'resources/sym62.JPG'},
    {'name': 'resources/nsym26.JPG', 'path': 'resources/nsym26.JPG'},
    {'name': 'resources/nsym40.JPG', 'path': 'resources/nsym40.JPG'},
    {'name': 'resources/nsym31.JPG', 'path': 'resources/nsym31.JPG'},
    {'name': 'resources/nsym45.JPG', 'path': 'resources/nsym45.JPG'},
    {'name': 'resources/sym22.JPG', 'path': 'resources/sym22.JPG'},
    {'name': 'resources/sym65.JPG', 'path': 'resources/sym65.JPG'},
    {'name': 'resources/sym71.JPG', 'path': 'resources/sym71.JPG'},
    {'name': 'resources/sym42.JPG', 'path': 'resources/sym42.JPG'},
    {'name': 'resources/nsym41.JPG', 'path': 'resources/nsym41.JPG'},
    {'name': 'resources/nsym44.JPG', 'path': 'resources/nsym44.JPG'},
    {'name': 'resources/sym1.JPG', 'path': 'resources/sym1.JPG'},
    {'name': 'resources/nsym66.JPG', 'path': 'resources/nsym66.JPG'},
    {'name': 'resources/nsym70.JPG', 'path': 'resources/nsym70.JPG'},
    {'name': 'resources/sym29.JPG', 'path': 'resources/sym29.JPG'},
    {'name': 'resources/nsym9.JPG', 'path': 'resources/nsym9.JPG'},
    {'name': 'resources/sym40.JPG', 'path': 'resources/sym40.JPG'},
    {'name': 'resources/nsym25.JPG', 'path': 'resources/nsym25.JPG'},
    {'name': 'resources/nsym12.JPG', 'path': 'resources/nsym12.JPG'},
    {'name': 'resources/nsym8.JPG', 'path': 'resources/nsym8.JPG'},
    {'name': 'resources/nsym21.JPG', 'path': 'resources/nsym21.JPG'},
    {'name': 'resources/sym75.JPG', 'path': 'resources/sym75.JPG'},
    {'name': 'resources/nsym18.JPG', 'path': 'resources/nsym18.JPG'},
    {'name': 'resources/nsym38.JPG', 'path': 'resources/nsym38.JPG'},
    {'name': 'resources/sym10.JPG', 'path': 'resources/sym10.JPG'},
    {'name': 'resources/nsym76.JPG', 'path': 'resources/nsym76.JPG'},
    {'name': 'resources/nsym59.JPG', 'path': 'resources/nsym59.JPG'},
    {'name': 'resources/sym67.JPG', 'path': 'resources/sym67.JPG'},
    {'name': 'resources/sym30.JPG', 'path': 'resources/sym30.JPG'},
    {'name': 'resources/example1.JPG', 'path': 'resources/example1.JPG'},
    {'name': 'resources/sym63.JPG', 'path': 'resources/sym63.JPG'},
    {'name': 'resources/sym16.JPG', 'path': 'resources/sym16.JPG'},
    {'name': 'resources/sym7.JPG', 'path': 'resources/sym7.JPG'},
    {'name': 'resources/sym46.JPG', 'path': 'resources/sym46.JPG'},
    {'name': 'resources/sym54.JPG', 'path': 'resources/sym54.JPG'},
    {'name': 'resources/sym12.JPG', 'path': 'resources/sym12.JPG'},
    {'name': 'resources/nsym2.JPG', 'path': 'resources/nsym2.JPG'},
    {'name': 'resources/nsym30.JPG', 'path': 'resources/nsym30.JPG'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var wlc_0Clock;
var text_11;
var mouse_12;
var key_resp_16;
var GSQS1Clock;
var text_32;
var slider_9;
var text_33;
var slider_10;
var text_34;
var slider_11;
var text_35;
var slider_12;
var text_36;
var slider_13;
var key_resp_23;
var text_37;
var GSQS2Clock;
var text_38;
var slider_14;
var text_39;
var slider_15;
var text_40;
var slider_16;
var text_41;
var slider_17;
var text_42;
var slider_18;
var key_resp_24;
var text_43;
var GSQS3Clock;
var text_44;
var slider_19;
var text_45;
var slider_20;
var text_46;
var slider_21;
var text_47;
var slider_22;
var text_48;
var slider_23;
var key_resp_25;
var text_49;
var PN_aff_questionsClock;
var text_21;
var slider_4;
var text_23;
var key_resp_17;
var PN_aff_questions2Clock;
var text_22;
var slider_5;
var text_24;
var key_resp_18;
var PN_aff_questions3Clock;
var text_25;
var slider;
var text_26;
var key_resp_19;
var wlcClock;
var text;
var key_resp;
var mouse_4;
var ins_square_1Clock;
var text_8;
var key_resp_8;
var mouse_5;
var square_helperClock;
var loop_breaker;
var square_names;
var corr_square_clicked;
var correct_square_counter;
var square_names_both;
var square_dict;
var square_dict_both;
var prac_loop_lengths;
var how_many_prac_loops;
var thisloop_item_number;
var counter;
var square_levelClock;
var text_level_1;
var text_level_2;
var squareClock;
var fixation2;
var grid;
var square_rand;
var square_recClock;
var text_9;
var grid2;
var mouse;
var square_0;
var square_1;
var square_2;
var square_3;
var square_4;
var square_5;
var square_6;
var square_7;
var square_8;
var square_9;
var square_10;
var square_11;
var square_12;
var square_13;
var square_14;
var square_15;
var square_rec_g_rClock;
var recall_counter;
var text_10;
var grid3;
var square_16;
var square_17;
var square_18;
var square_19;
var square_20;
var square_21;
var square_22;
var square_23;
var square_24;
var square_25;
var square_26;
var square_27;
var square_28;
var square_29;
var square_30;
var square_31;
var next_setClock;
var text_result_squares;
var text_end_prac;
var mouse_2;
var key_resp_13;
var ins_square_endClock;
var text_square_end;
var text_18;
var key_resp_9;
var mouse_3;
var MW_questions1Clock;
var text_27;
var slider_6;
var text_28;
var key_resp_20;
var MW_questions2Clock;
var text_20;
var slider_7;
var text_29;
var key_resp_21;
var MW_questions3Clock;
var text_30;
var slider_8;
var text_31;
var key_resp_22;
var next_partClock;
var text_19;
var mouse_11;
var key_resp_15;
var ins_sym_1Clock;
var text_2;
var key_resp_2;
var mouse_6;
var ins_sym_2Clock;
var text_3;
var image_sym;
var text_sym_nsym;
var key_resp_3;
var ins_sym_3Clock;
var text_4;
var image;
var text_sym_nsym_2;
var key_resp_4;
var ins2Clock;
var text_5;
var key_resp_5;
var mouse_10;
var prac_sym_helperClock;
var prac_symClock;
var resources_path;
var pracSymmTrialNumber;
var selected_images;
var total_trials;
var correct_answers;
var countDownText;
var correct_total_text;
var timerPracSym;
var non_sym_images;
var sym_images;
var fixation;
var image_2;
var text_sym_nsym_3;
var text_countdown;
var text_how_many_correct;
var key_resp_6;
var prac_sym_g_rClock;
var usedTime;
var maskColor;
var greenMask;
var redMask;
var picture;
var image_3;
var image_4;
var prac_sym_fbClock;
var accuracyPercent;
var prac_sym_loop_nr;
var prac_fb;
var accuracyText;
var text_6;
var text_score;
var text_7;
var key_resp_7;
var ins_bothClock;
var text_12;
var key_resp_10;
var mouse_9;
var both_helperClock;
var overall_symm;
var overall_symm_corr;
var both_levelClock;
var text_both_level_1;
var text_both_level_2;
var both_squareClock;
var fixation_both;
var grid_both;
var square_rand_both;
var both_symClock;
var selected_images_both;
var fixation_both_2;
var image_2_both;
var text_sym_nsym_3_both;
var text_countdown_both;
var text_how_many_correct_both;
var key_resp_6_both;
var both_sym_g_rClock;
var image_3_both;
var text_corr_sym_or_not;
var both_square_recClock;
var text9_both;
var grid2_both;
var mouse_both;
var square_0_both;
var square_1_both;
var square_2_both;
var square_3_both;
var square_4_both;
var square_5_both;
var square_6_both;
var square_7_both;
var square_8_both;
var square_9_both;
var square_10_both;
var square_11_both;
var square_12_both;
var square_13_both;
var square_14_both;
var square_15_both;
var both_square_rec_g_rClock;
var text_10_both;
var grid3_both;
var square_16_both;
var square_17_both;
var square_18_both;
var square_19_both;
var square_20_both;
var square_21_both;
var square_22_both;
var square_23_both;
var square_24_both;
var square_25_both;
var square_26_both;
var square_27_both;
var square_28_both;
var square_29_both;
var square_30_both;
var square_31_both;
var both_next_setClock;
var text_result_square_both;
var text_end_prac_both;
var key_resp_12;
var mouse_8;
var both_endClock;
var text_square_end_both;
var text_14;
var text_accuracy_both;
var text_next_questions;
var key_resp_11;
var mouse_7;
var byeClock;
var text_bye;
var key_resp_bye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "wlc_0"
  wlc_0Clock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Üdvözlünk! Köszönjük, hogy részt veszel kutatásunkban.\n\nKérlek, amíg tart a kísérlet, ne lépj ki a teljes képernyős módból!\n\nMegfelelően nyugodt környezetet és időpontot válassz a feladat elvégzéséhez, hogy ne zavarjon meg közben semmi. A feladatokat megszakítás nélkül, egyetlen részletben végezd el, lehetőleg egérrel.\n\nA következő oldalakon néhány egyszerű, MÚLT ÉJSZAKAI alvásodra, illetve JELENLEGI hangulatodra vonatkozó kérdés fog megjelenni. Kérlek válaszolj ezekre az Igaz/Nem igaz gombokra kattintva, illetve az 1-10-ig terjedő skálákon a szerinted leginkább Rád illő pontra kattintva.\n\nA folytatáshoz nyomd meg a SPACE billentyűt vagy kattints!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_12 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_12.mouseClock = new util.Clock();
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GSQS1"
  GSQS1Clock = new util.Clock();
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: '1. Az éjjel mélyen aludtam.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_9 = new visual.Slider({
    win: psychoJS.window, name: 'slider_9',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, 0.35], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color([1.0, 1.0, 1.0]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: true,
  });
  
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: '2. Úgy érzem, rosszul aludtam az éjjel.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.175], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  slider_10 = new visual.Slider({
    win: psychoJS.window, name: 'slider_10',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, 0.175], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: true,
  });
  
  text_34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_34',
    text: '3. Több mint fél órába telt, amíg este el tudtam aludni.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  slider_11 = new visual.Slider({
    win: psychoJS.window, name: 'slider_11',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, 0], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: true,
  });
  
  text_35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_35',
    text: '4. Többször is felébredtem az éjjel.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.175)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  slider_12 = new visual.Slider({
    win: psychoJS.window, name: 'slider_12',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, (- 0.175)], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: true,
  });
  
  text_36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_36',
    text: '5. Ma reggel fáradtan ébredtem.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  slider_13 = new visual.Slider({
    win: psychoJS.window, name: 'slider_13',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, (- 0.35)], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -9, 
    flip: true,
  });
  
  key_resp_23 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_37',
    text: 'SPACE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.43)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "GSQS2"
  GSQS2Clock = new util.Clock();
  text_38 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_38',
    text: '6. Úgy érzem, nem aludtam eleget az éjjel.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_14 = new visual.Slider({
    win: psychoJS.window, name: 'slider_14',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, 0.35], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color([1.0, 1.0, 1.0]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: true,
  });
  
  text_39 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_39',
    text: '7. Felébredtem az éjszaka közepén.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.175], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  slider_15 = new visual.Slider({
    win: psychoJS.window, name: 'slider_15',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, 0.175], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: true,
  });
  
  text_40 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_40',
    text: '8. Ma reggel kipihenten ébredtem.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  slider_16 = new visual.Slider({
    win: psychoJS.window, name: 'slider_16',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, 0], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: true,
  });
  
  text_41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_41',
    text: '9. Azt hiszem, csak néhány órát aludtam az éjjel.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.175)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  slider_17 = new visual.Slider({
    win: psychoJS.window, name: 'slider_17',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, (- 0.175)], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: true,
  });
  
  text_42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_42',
    text: '10. Azt hiszem, jól aludtam az éjjel.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  slider_18 = new visual.Slider({
    win: psychoJS.window, name: 'slider_18',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, (- 0.35)], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -9, 
    flip: true,
  });
  
  key_resp_24 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_43',
    text: 'SPACE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.43)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "GSQS3"
  GSQS3Clock = new util.Clock();
  text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_44',
    text: '11. Egy szemhunyásnyit sem aludtam az éjjel.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_19 = new visual.Slider({
    win: psychoJS.window, name: 'slider_19',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, 0.35], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color([1.0, 1.0, 1.0]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: true,
  });
  
  text_45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_45',
    text: '12. Tegnap este könnyen elaludtam.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.175], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  slider_20 = new visual.Slider({
    win: psychoJS.window, name: 'slider_20',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, 0.175], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: true,
  });
  
  text_46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_46',
    text: '13. Amikor éjjel felébredtem, nehezen aludtam vissza.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  slider_21 = new visual.Slider({
    win: psychoJS.window, name: 'slider_21',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, 0], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: true,
  });
  
  text_47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_47',
    text: '14. Egész éjjel ide-oda forgolódtam az ágyban',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.175)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  slider_22 = new visual.Slider({
    win: psychoJS.window, name: 'slider_22',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, (- 0.175)], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: true,
  });
  
  text_48 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_48',
    text: '15. Az éjjel nem alhattam többet 5 óránál.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  slider_23 = new visual.Slider({
    win: psychoJS.window, name: 'slider_23',
    startValue: undefined,
    size: [0.15, 0.03], pos: [0.4, (- 0.35)], ori: undefined, units: 'height',
    labels: ["Igaz", "Nem Igaz"], fontSize: 0.03, ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -9, 
    flip: true,
  });
  
  key_resp_25 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_49 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_49',
    text: 'SPACE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.43)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "PN_aff_questions"
  PN_aff_questionsClock = new util.Clock();
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: '1. Kérlek értékeld jelenlegi éberségedet 1-10-ig terjedő skálán. \nJelenlegi éberségemre leginkább jellemző, hogy:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_4 = new visual.Slider({
    win: psychoJS.window, name: 'slider_4',
    startValue: undefined,
    size: [1.1, 0.02], pos: [0, (- 0.1)], ori: 0.0, units: 'height',
    labels: ["1: \u00c1lmos, k\u00e1ba vagyok", "10: Nagyon akt\u00edv, \u00e9ber vagyok"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'SPACE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PN_aff_questions2"
  PN_aff_questions2Clock = new util.Clock();
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: '2. Kérlek értékeld jelenlegi állapotodat 1-10-ig terjedő skálán. \nJelenlegi állapotomra leginkább jellemző, hogy:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_5 = new visual.Slider({
    win: psychoJS.window, name: 'slider_5',
    startValue: undefined,
    size: [1.1, 0.02], pos: [0, (- 0.1)], ori: 0.0, units: 'height',
    labels: ["1: Teljesen nyugodt, ellazult vagyok", "10: Nagyon izgatott, fesz\u00fclt vagyok"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'SPACE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PN_aff_questions3"
  PN_aff_questions3Clock = new util.Clock();
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: '3. Kérlek értékeld jelenlegi hangulatodat 1-10-ig terjedő skálán. \nJelenlegi hangulatomra leginkább jellemző, hogy:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [1.1, 0.02], pos: [0, (- 0.1)], ori: 0.0, units: 'height',
    labels: ["1: Lehangolt, szomor\u00fa, rosszkedv\u0171 vagyok", "10: J\u00f3kedv\u0171, feldobott, vid\u00e1m vagyok"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: 'SPACE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "wlc"
  wlcClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Most egy emlékezeti feladat következik.\n\nA feladat során egy piros négyzet jelenik majd meg viszonylag rövid időre egy négyzetrács véletlenszerű mezőjében, majd ez néhányszor megismétlődik.\nKérlek, jegyezd meg a megjelenő piros négyzetek pontos helyét a megfelelő sorrendben.\n\nSpace/Kattintás',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "ins_square_1"
  ins_square_1Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'A piros négyzetek egy 4x4-es négyzetrácsban jelennek majd meg, egymás után. Igyekezz megjegyezni a bemutatott négyzetek helyes sorrendjét!\n\nEzután egy üres négyzetrácsban neked meg kell majd jelölnöd a bemutatott négyzetek pontos helyét a megfelelő sorrendben. Ezért kérlek, abban a sorrendben kattints a négyzetrács mezőire, ahogyan szerinted a piros négyzetek megjelentek. Erre bármennyi időd lesz.\n\nElőször alacsony szinten indul a feladat, ám ha többször is sikerül az adott szinten a helyes sorrendet megadnod, egy idő után szintet lépsz. Ilyenkor eggyel több négyzet helyét kell majd megjegyezned! Próbálj meg minél magasabb szintet elérni!\n\nMost egy pár gyakorlókör fog következni. \nSPACE/Kattintás\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  // Initialize components for Routine "square_helper"
  square_helperClock = new util.Clock();
  // Run 'Begin Experiment' code from code_square_helper
  // create an array of square names
  loop_breaker = 0;
  square_names = [];
  corr_square_clicked = 0;
  correct_square_counter = 0;
  for (let i = 0; i < 16; i++) {
  square_names.push("square_" + i);
  }
  square_names_both = [];
  for (let i = 0; i < 16; i++) {
  square_names_both.push("square_" + i + "_both");
  }
  
  // create an array of square coordinates
  let square_coordinates = [
  [-0.225, 0.225], [-0.075, 0.225], [0.075, 0.225], [0.225, 0.225],
  [-0.225, 0.075], [-0.075, 0.075], [0.075, 0.075], [0.225, 0.075],
  [-0.225, -0.075], [-0.075, -0.075], [0.075, -0.075], [0.225, -0.075],
  [-0.225, -0.225], [-0.075, -0.225], [0.075, -0.225], [0.225, -0.225]
  ];
  
  // creating the dictionaries
  square_dict = {};
  for (let i = 0; i < square_names.length; i++) {
  square_dict[square_names[i]] = square_coordinates[i];
  }
  square_dict_both = {};
  for (let i = 0; i < square_names_both.length; i++) {
  square_dict_both[square_names_both[i]] = square_coordinates[i];
  }
  
  // specify the length of the practice loops
  prac_loop_lengths = [2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12];
  // define the number of practice loops
  how_many_prac_loops = prac_loop_lengths.length;
  
  thisloop_item_number = 0;
  counter = 0;
  // Initialize components for Routine "square_level"
  square_levelClock = new util.Clock();
  text_level_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_level_1',
    text: 'SZINT: ',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_level_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_level_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "square"
  squareClock = new util.Clock();
  fixation2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation2',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  grid = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid', units : undefined, 
    image : 'resources/grid.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  square_rand = new visual.Rect ({
    win: psychoJS.window, name: 'square_rand', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.804,-1.000,-1.000]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "square_rec"
  square_recClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Kattints a négyzetekre abban a sorrendben, ahogyan megjelentek!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  grid2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid2', units : undefined, 
    image : 'resources/grid.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  square_0 = new visual.Rect ({
    win: psychoJS.window, name: 'square_0', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  square_1 = new visual.Rect ({
    win: psychoJS.window, name: 'square_1', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  square_2 = new visual.Rect ({
    win: psychoJS.window, name: 'square_2', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  square_3 = new visual.Rect ({
    win: psychoJS.window, name: 'square_3', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  square_4 = new visual.Rect ({
    win: psychoJS.window, name: 'square_4', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  square_5 = new visual.Rect ({
    win: psychoJS.window, name: 'square_5', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  square_6 = new visual.Rect ({
    win: psychoJS.window, name: 'square_6', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -9, interpolate: true,
  });
  
  square_7 = new visual.Rect ({
    win: psychoJS.window, name: 'square_7', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -10, interpolate: true,
  });
  
  square_8 = new visual.Rect ({
    win: psychoJS.window, name: 'square_8', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -11, interpolate: true,
  });
  
  square_9 = new visual.Rect ({
    win: psychoJS.window, name: 'square_9', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -12, interpolate: true,
  });
  
  square_10 = new visual.Rect ({
    win: psychoJS.window, name: 'square_10', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -13, interpolate: true,
  });
  
  square_11 = new visual.Rect ({
    win: psychoJS.window, name: 'square_11', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -14, interpolate: true,
  });
  
  square_12 = new visual.Rect ({
    win: psychoJS.window, name: 'square_12', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -15, interpolate: true,
  });
  
  square_13 = new visual.Rect ({
    win: psychoJS.window, name: 'square_13', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -16, interpolate: true,
  });
  
  square_14 = new visual.Rect ({
    win: psychoJS.window, name: 'square_14', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -17, interpolate: true,
  });
  
  square_15 = new visual.Rect ({
    win: psychoJS.window, name: 'square_15', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -18, interpolate: true,
  });
  
  // Initialize components for Routine "square_rec_g_r"
  square_rec_g_rClock = new util.Clock();
  // Run 'Begin Experiment' code from code_square_rec_g_r
  recall_counter = 0;
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Kattints a négyzetekre abban a sorrendben, ahogyan megjelentek!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  grid3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid3', units : undefined, 
    image : 'resources/grid.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  square_16 = new visual.Rect ({
    win: psychoJS.window, name: 'square_16', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  square_17 = new visual.Rect ({
    win: psychoJS.window, name: 'square_17', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  square_18 = new visual.Rect ({
    win: psychoJS.window, name: 'square_18', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  square_19 = new visual.Rect ({
    win: psychoJS.window, name: 'square_19', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  square_20 = new visual.Rect ({
    win: psychoJS.window, name: 'square_20', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  square_21 = new visual.Rect ({
    win: psychoJS.window, name: 'square_21', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  square_22 = new visual.Rect ({
    win: psychoJS.window, name: 'square_22', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -9, interpolate: true,
  });
  
  square_23 = new visual.Rect ({
    win: psychoJS.window, name: 'square_23', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -10, interpolate: true,
  });
  
  square_24 = new visual.Rect ({
    win: psychoJS.window, name: 'square_24', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -11, interpolate: true,
  });
  
  square_25 = new visual.Rect ({
    win: psychoJS.window, name: 'square_25', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -12, interpolate: true,
  });
  
  square_26 = new visual.Rect ({
    win: psychoJS.window, name: 'square_26', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -13, interpolate: true,
  });
  
  square_27 = new visual.Rect ({
    win: psychoJS.window, name: 'square_27', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -14, interpolate: true,
  });
  
  square_28 = new visual.Rect ({
    win: psychoJS.window, name: 'square_28', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -15, interpolate: true,
  });
  
  square_29 = new visual.Rect ({
    win: psychoJS.window, name: 'square_29', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -16, interpolate: true,
  });
  
  square_30 = new visual.Rect ({
    win: psychoJS.window, name: 'square_30', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -17, interpolate: true,
  });
  
  square_31 = new visual.Rect ({
    win: psychoJS.window, name: 'square_31', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -18, interpolate: true,
  });
  
  // Initialize components for Routine "next_set"
  next_setClock = new util.Clock();
  text_result_squares = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_result_squares',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_end_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_prac',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ins_square_end"
  ins_square_endClock = new util.Clock();
  text_square_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_square_end',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'Most kérünk a következő oldalakon  válaszolj 3 rövid kérdésre.\n\nSPACE/Katt',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "MW_questions1"
  MW_questions1Clock = new util.Clock();
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '1. Kérlek értékeld figyelmedet, gondolataidat a feladat végrehajtása során 1-10-ig terjedő skálán. \n\nÉrtékelés: Az 1-es „a gondolataim teljesen elkalandoztak, képtelen voltam a feladatra koncentrálni” állapotot, míg a 10-es a „végig nagyon fókuszált voltam, csak a feladatara koncentráltam” állapotokat jelenti.\n\nA feladat során a figyelmemre leginkább jellemző volt, hogy:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_6 = new visual.Slider({
    win: psychoJS.window, name: 'slider_6',
    startValue: undefined,
    size: [1.1, 0.02], pos: [0, (- 0.2)], ori: 0.0, units: 'height',
    labels: ["1: Gondolataim teljesen elkalandoztak", "10: V\u00e9gig nagyon f\u00f3kusz\u00e1lt voltam"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'SPACE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MW_questions2"
  MW_questions2Clock = new util.Clock();
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: '2. Kérjük értékeld a feladat elvégzése során megjelenő gondolataidnak a hangulatát. \nA feladat végrehajtása során gondolataim:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_7 = new visual.Slider({
    win: psychoJS.window, name: 'slider_7',
    startValue: undefined,
    size: [0.02, 0.3], pos: [(- 0.25), (- 0.1)], ori: -180.0, units: 'height',
    labels: ["1: Teljes m\u00e9rt\u00e9kben pozit\u00edvak voltak", "2: Ink\u00e1bb pozit\u00edvak voltak, mint negat\u00edvak", "3: Legink\u00e1bb semlegesek voltak", "4: Ink\u00e1bb negat\u00edvak voltak, mint pozit\u00edvak", "5: Teljes m\u00e9rt\u00e9kben negat\u00edvak voltak"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: true,
  });
  
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: 'SPACE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MW_questions3"
  MW_questions3Clock = new util.Clock();
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: '3. Kérjük értékeld a feladat elvégzése során megjelenő gondolataidnak a tartalmát. \nA feladat végrehajtása során:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_8 = new visual.Slider({
    win: psychoJS.window, name: 'slider_8',
    startValue: undefined,
    size: [0.02, 0.2], pos: [(- 0.35), (- 0.1)], ori: -180.0, units: 'height',
    labels: ["1: Legink\u00e1bb a j\u00f6v\u0151 m\u00e9g meg nem t\u00f6rt\u00e9nt esem\u00e9nyei jutottak eszembe.", "2: Legink\u00e1bb a jelen pillanat, helyzet, j\u00e1rt az eszemben.", "3: Legink\u00e1bb kor\u00e1bbi esem\u00e9nyek, eml\u00e9kek jutottak eszembe."], fontSize: 0.03, ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: true,
  });
  
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: 'SPACE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_22 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "next_part"
  next_partClock = new util.Clock();
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'Szuper! \nMost újra egy feladat fog következni, amely nagyon hasonló lesz az előzőhöz.\n\nUgyanígy négyzetek fognak megjelenni, és a feladatod továbbra az, hogy minél hosszabb sorrendet megjegyezz.\nAzonban minden bemutatott négyzet között lesz egy döntési feladat is, ahol el kell döntened egy ábráról, hogy szimmetrikus-e függőlegesen.\n\nElőször nézzük meg, hogyan néz ki a döntési feladat.\n\nSPACE/Katt',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_11 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_11.mouseClock = new util.Clock();
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ins_sym_1"
  ins_sym_1Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Meg fog jelenni egy kép, amelyről el kell döntened, hogy FÜGGŐLEGESEN szimmetrikus-e.\n \nHa szimmetrikus, a billentyűzeten a JOBB gombot kell megnyomnod,\nha nem szimmetrikus, a BAL gombot.\n\nSPACE/Katt',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  // Initialize components for Routine "ins_sym_2"
  ins_sym_2Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Az alábbi ábra például függőlegesen szimmetrikus.\nNyomd meg a megfelelő gombot',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_sym = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_sym', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_sym_nsym = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sym_nsym',
    text: 'NEM SZIMMETRIKUS      SZIMMETRIKUS\nBAL                     JOBB        ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.04, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ins_sym_3"
  ins_sym_3Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Az alábbi ábra pedig nem az.\nNyomd meg a megfelelő gombot.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_sym_nsym_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sym_nsym_2',
    text: 'NEM SZIMMETRIKUS      SZIMMETRIKUS\nBAL                     JOBB        ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.04, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ins2"
  ins2Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Most ebből egy pár gyakorlókör fog következni.\n\nMinél gyorsabban és pontosabban igyekezz válaszolni.\nÖsszesen két másodperced van válaszolni, utána már nem rögzíti válaszodat a rendszer!\n\nKészítsd az ujjaidat a megfelelő gombokra\nSzimmetrikus: JOBB gomb\nNem szimmetrikus: BAL gomb\n\nSPACE/Katt',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_10 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_10.mouseClock = new util.Clock();
  // Initialize components for Routine "prac_sym_helper"
  prac_sym_helperClock = new util.Clock();
  // Initialize components for Routine "prac_sym"
  prac_symClock = new util.Clock();
  // Run 'Begin Experiment' code from code_prac_sym
  // Define the path to the resources folder
  resources_path = 'resources/';
  // Define how many trials I want for the symmetry practice
  pracSymmTrialNumber = 10;
  // Define the array for the images to be shown
  selected_images = [];
  // Setting total trials, correct answers and countdown text
  total_trials = 0;
  correct_answers = 0;
  countDownText = "";
  correct_total_text = "";
  // Setting timer for live countdown (2000 ms plus 500 fixation)
  timerPracSym = new util.CountdownTimer(2.5);
  
  // Create the first array for the non-symmetric images
  non_sym_images = [];
  for (let i = 1; i < 80; i++) {
  const image_name = 'nsym' + i + '.JPG';
  const image_path = resources_path + image_name;
  non_sym_images.push(image_path);
  }
  
  // Create the second array for the symmetric images
  sym_images = [];
  for (let i = 1; i < 80; i++) {
  const image_name = 'sym' + i + '.JPG';
  const image_path = resources_path + image_name;
  sym_images.push(image_path);
  }
  
  
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  while (0 !== currentIndex) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
  }
  return array;
  }
  
  //creating function that chooses x amount of sym and nsym images
  function select_images(non_sym_images, sym_images, pracSymmTrialNumber) {
  if (pracSymmTrialNumber % 2 === 0) {
  const half_trials = Math.floor(pracSymmTrialNumber / 2);
  // Select random samples from sym and nsym images
  let selected_non_sym_images = shuffle(non_sym_images);
      selected_non_sym_images = selected_non_sym_images.slice(0, half_trials);
  let selected_sym_images = shuffle(sym_images);
      selected_sym_images = selected_sym_images.slice(0, half_trials);
  selected_images = selected_non_sym_images.concat(selected_sym_images);
  selected_images.sort(() => Math.random() - 0.5); }
   else {
  const half_trials = Math.floor((pracSymmTrialNumber + 1) / 2);
  //same here
  let selected_non_sym_images = shuffle(non_sym_images);
      selected_non_sym_images = selected_non_sym_images.slice(0, half_trials);
  let selected_sym_images = shuffle(sym_images);
      selected_sym_images = selected_sym_images.slice(0, half_trials);
  //but we delete one
  selected_images = selected_non_sym_images.concat(selected_sym_images);
  selected_images.sort(() => Math.random() - 0.5);
  selected_images.pop();
  }
  return selected_images;
  }
  selected_images = select_images(non_sym_images, sym_images, pracSymmTrialNumber);
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_sym_nsym_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sym_nsym_3',
    text: 'NEM SZIMMETRIKUS      SZIMMETRIKUS\nBAL                     JOBB        ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.04, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_countdown = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_countdown',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.1], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  text_how_many_correct = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_how_many_correct',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_sym_g_r"
  prac_sym_g_rClock = new util.Clock();
  // Run 'Begin Experiment' code from code_prac_sym_g_r
  usedTime = 0
  maskColor = "";
  greenMask = resources_path + "1green.JPG";
  redMask = resources_path + "1red.JPG";
  picture = "";
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : 0.7,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "prac_sym_fb"
  prac_sym_fbClock = new util.Clock();
  // Run 'Begin Experiment' code from code_prac_sym_fb
  accuracyPercent = 0;
  prac_sym_loop_nr = 0;
  prac_fb = "";
  accuracyText = "";
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Eredményed: ',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.12), 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_score = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_score',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.12, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.07)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ins_both"
  ins_bothClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Most nézzük meg, hogyan fog a négyzetemlékezeti és a szimmetriadöntéses feladat egyszerre kinézni.\n\nMinden bemutatott piros négyzet után döntened kell egy kép szimetrikusságáról.\nEgyrészt igyekezz megjegyezni, hol jelennek meg a négyzetek, másrészt ne felejtsd el, hogy minden négyzet között helyesen kell döntened 2 másodpercen belül az ábrák függőleges szimmetrikusságáról.\n\nNem baj, ha egyszer-egyszer hibázol a szimmetrikus döntési feladatban. Ne felejtsd, a fő cél az, hogy minél hosszabb szekvenciákat jegyezz meg. Viszont figyelj, hogy összesítve 85% fölött maradjon a helyes döntéseid aránya.\n\nElőször lesz egy pár gyakorlókör.\nKészítsd az ujjaidat a BAL és JOBB gombokra.\n\nSPACE/Katt',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_9 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_9.mouseClock = new util.Clock();
  // Initialize components for Routine "both_helper"
  both_helperClock = new util.Clock();
  // Run 'Begin Experiment' code from code_both_helper
  overall_symm = 0;
  overall_symm_corr = 0;
  // Initialize components for Routine "both_level"
  both_levelClock = new util.Clock();
  text_both_level_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_both_level_1',
    text: 'SZINT: ',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_both_level_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_both_level_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "both_square"
  both_squareClock = new util.Clock();
  fixation_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_both',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  grid_both = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_both', units : undefined, 
    image : 'resources/grid.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  square_rand_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_rand_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.804,-1.000,-1.000]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "both_sym"
  both_symClock = new util.Clock();
  // Run 'Begin Experiment' code from code_prac_sym_both
  selected_images_both = [];
  
  fixation_both_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_both_2',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image_2_both = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2_both', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_sym_nsym_3_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sym_nsym_3_both',
    text: 'NEM SZIMMETRIKUS      SZIMMETRIKUS\nBAL                     JOBB        ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.04, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_countdown_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_countdown_both',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.1], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  text_how_many_correct_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_how_many_correct_both',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp_6_both = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "both_sym_g_r"
  both_sym_g_rClock = new util.Clock();
  image_3_both = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3_both', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_corr_sym_or_not = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_corr_sym_or_not',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "both_square_rec"
  both_square_recClock = new util.Clock();
  text9_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'text9_both',
    text: 'Kattints a négyzetekre abban a sorrendben, ahogyan megjelentek!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  grid2_both = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid2_both', units : undefined, 
    image : 'resources/grid.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_both = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_both.mouseClock = new util.Clock();
  square_0_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_0_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  square_1_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_1_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  square_2_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_2_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  square_3_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_3_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  square_4_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_4_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  square_5_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_5_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  square_6_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_6_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -9, interpolate: true,
  });
  
  square_7_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_7_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -10, interpolate: true,
  });
  
  square_8_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_8_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -11, interpolate: true,
  });
  
  square_9_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_9_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -12, interpolate: true,
  });
  
  square_10_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_10_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -13, interpolate: true,
  });
  
  square_11_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_11_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -14, interpolate: true,
  });
  
  square_12_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_12_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -15, interpolate: true,
  });
  
  square_13_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_13_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -16, interpolate: true,
  });
  
  square_14_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_14_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -17, interpolate: true,
  });
  
  square_15_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_15_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -18, interpolate: true,
  });
  
  // Initialize components for Routine "both_square_rec_g_r"
  both_square_rec_g_rClock = new util.Clock();
  text_10_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10_both',
    text: 'Kattints a négyzetekre abban a sorrendben, ahogyan megjelentek!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  grid3_both = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid3_both', units : undefined, 
    image : 'resources/grid.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  square_16_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_16_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  square_17_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_17_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  square_18_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_18_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  square_19_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_19_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, 0.225],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  square_20_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_20_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  square_21_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_21_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  square_22_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_22_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -9, interpolate: true,
  });
  
  square_23_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_23_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, 0.075],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -10, interpolate: true,
  });
  
  square_24_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_24_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -11, interpolate: true,
  });
  
  square_25_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_25_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -12, interpolate: true,
  });
  
  square_26_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_26_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -13, interpolate: true,
  });
  
  square_27_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_27_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, (- 0.075)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -14, interpolate: true,
  });
  
  square_28_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_28_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.225), (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -15, interpolate: true,
  });
  
  square_29_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_29_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [(- 0.075), (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -16, interpolate: true,
  });
  
  square_30_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_30_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.075, (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -17, interpolate: true,
  });
  
  square_31_both = new visual.Rect ({
    win: psychoJS.window, name: 'square_31_both', 
    width: [0.13, 0.13][0], height: [0.13, 0.13][1],
    ori: 0.0, pos: [0.225, (- 0.225)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1,1,1]),
    fillColor: new util.Color([1.000,0.004,0.004]),
    opacity: 1.0, depth: -18, interpolate: true,
  });
  
  // Initialize components for Routine "both_next_set"
  both_next_setClock = new util.Clock();
  text_result_square_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_result_square_both',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_end_prac_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_prac_both',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_8 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_8.mouseClock = new util.Clock();
  // Initialize components for Routine "both_end"
  both_endClock = new util.Clock();
  text_square_end_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_square_end_both',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'A szimmetriadöntésekben elért arányod:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_accuracy_both = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_accuracy_both',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_next_questions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_next_questions',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  text_bye = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_bye',
    text: 'Nagyon köszönjük, hogy részt vettél a kísérletben!\n\nAmennyiben bármilyen kérdésed, észrevételed van, kérlek jelezd a tájékoztató dokumentumban megosztott elérhetőségek egyikén!\n\nA kutatás utolsó feladata egy zárókérdőív kitöltése, amely maximum 2 percet vesz igénybe.\n\nA befejezéshez nyomd meg a SPACE-t',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_bye = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var _key_resp_16_allKeys;
var wlc_0Components;
function wlc_0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wlc_0' ---
    t = 0;
    wlc_0Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_12
    // current position of the mouse:
    mouse_12.x = [];
    mouse_12.y = [];
    mouse_12.leftButton = [];
    mouse_12.midButton = [];
    mouse_12.rightButton = [];
    mouse_12.time = [];
    gotValidClick = false; // until a click is received
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    // keep track of which components have finished
    wlc_0Components = [];
    wlc_0Components.push(text_11);
    wlc_0Components.push(mouse_12);
    wlc_0Components.push(key_resp_16);
    
    for (const thisComponent of wlc_0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function wlc_0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wlc_0' ---
    // get current time
    t = wlc_0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    // *mouse_12* updates
    if (t >= 0.0 && mouse_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_12.tStart = t;  // (not accounting for frame time here)
      mouse_12.frameNStart = frameN;  // exact frame index
      
      mouse_12.status = PsychoJS.Status.STARTED;
      mouse_12.mouseClock.reset();
      prevButtonState = mouse_12.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_12.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_12.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_12.getPos();
          mouse_12.x.push(_mouseXYs[0]);
          mouse_12.y.push(_mouseXYs[1]);
          mouse_12.leftButton.push(_mouseButtons[0]);
          mouse_12.midButton.push(_mouseButtons[1]);
          mouse_12.rightButton.push(_mouseButtons[2]);
          mouse_12.time.push(mouse_12.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *key_resp_16* updates
    if (t >= 0.0 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
    }

    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wlc_0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wlc_0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wlc_0' ---
    for (const thisComponent of wlc_0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_12.x) {  psychoJS.experiment.addData('mouse_12.x', mouse_12.x[0])};
    if (mouse_12.y) {  psychoJS.experiment.addData('mouse_12.y', mouse_12.y[0])};
    if (mouse_12.leftButton) {  psychoJS.experiment.addData('mouse_12.leftButton', mouse_12.leftButton[0])};
    if (mouse_12.midButton) {  psychoJS.experiment.addData('mouse_12.midButton', mouse_12.midButton[0])};
    if (mouse_12.rightButton) {  psychoJS.experiment.addData('mouse_12.rightButton', mouse_12.rightButton[0])};
    if (mouse_12.time) {  psychoJS.experiment.addData('mouse_12.time', mouse_12.time[0])};
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_16.corr, level);
    }
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
        routineTimer.reset();
        }
    
    key_resp_16.stop();
    // the Routine "wlc_0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_23_allKeys;
var GSQS1Components;
function GSQS1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GSQS1' ---
    t = 0;
    GSQS1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_9.reset()
    slider_10.reset()
    slider_11.reset()
    slider_12.reset()
    slider_13.reset()
    key_resp_23.keys = undefined;
    key_resp_23.rt = undefined;
    _key_resp_23_allKeys = [];
    // keep track of which components have finished
    GSQS1Components = [];
    GSQS1Components.push(text_32);
    GSQS1Components.push(slider_9);
    GSQS1Components.push(text_33);
    GSQS1Components.push(slider_10);
    GSQS1Components.push(text_34);
    GSQS1Components.push(slider_11);
    GSQS1Components.push(text_35);
    GSQS1Components.push(slider_12);
    GSQS1Components.push(text_36);
    GSQS1Components.push(slider_13);
    GSQS1Components.push(key_resp_23);
    GSQS1Components.push(text_37);
    
    for (const thisComponent of GSQS1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GSQS1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GSQS1' ---
    // get current time
    t = GSQS1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }

    
    // *slider_9* updates
    if (t >= 0.0 && slider_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_9.tStart = t;  // (not accounting for frame time here)
      slider_9.frameNStart = frameN;  // exact frame index
      
      slider_9.setAutoDraw(true);
    }

    
    // *text_33* updates
    if (t >= 0.0 && text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_33.tStart = t;  // (not accounting for frame time here)
      text_33.frameNStart = frameN;  // exact frame index
      
      text_33.setAutoDraw(true);
    }

    
    // *slider_10* updates
    if (t >= 0.0 && slider_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_10.tStart = t;  // (not accounting for frame time here)
      slider_10.frameNStart = frameN;  // exact frame index
      
      slider_10.setAutoDraw(true);
    }

    
    // *text_34* updates
    if (t >= 0.0 && text_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_34.tStart = t;  // (not accounting for frame time here)
      text_34.frameNStart = frameN;  // exact frame index
      
      text_34.setAutoDraw(true);
    }

    
    // *slider_11* updates
    if (t >= 0.0 && slider_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_11.tStart = t;  // (not accounting for frame time here)
      slider_11.frameNStart = frameN;  // exact frame index
      
      slider_11.setAutoDraw(true);
    }

    
    // *text_35* updates
    if (t >= 0.0 && text_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_35.tStart = t;  // (not accounting for frame time here)
      text_35.frameNStart = frameN;  // exact frame index
      
      text_35.setAutoDraw(true);
    }

    
    // *slider_12* updates
    if (t >= 0.0 && slider_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_12.tStart = t;  // (not accounting for frame time here)
      slider_12.frameNStart = frameN;  // exact frame index
      
      slider_12.setAutoDraw(true);
    }

    
    // *text_36* updates
    if (t >= 0.0 && text_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_36.tStart = t;  // (not accounting for frame time here)
      text_36.frameNStart = frameN;  // exact frame index
      
      text_36.setAutoDraw(true);
    }

    
    // *slider_13* updates
    if (t >= 0.0 && slider_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_13.tStart = t;  // (not accounting for frame time here)
      slider_13.frameNStart = frameN;  // exact frame index
      
      slider_13.setAutoDraw(true);
    }

    
    // *key_resp_23* updates
    if ((slider_13.rating) && key_resp_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_23.tStart = t;  // (not accounting for frame time here)
      key_resp_23.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_23.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_23.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_23.clearEvents(); });
    }

    if (key_resp_23.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_23.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_23_allKeys = _key_resp_23_allKeys.concat(theseKeys);
      if (_key_resp_23_allKeys.length > 0) {
        key_resp_23.keys = _key_resp_23_allKeys[_key_resp_23_allKeys.length - 1].name;  // just the last key pressed
        key_resp_23.rt = _key_resp_23_allKeys[_key_resp_23_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_37* updates
    if ((slider_13.rating) && text_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_37.tStart = t;  // (not accounting for frame time here)
      text_37.frameNStart = frameN;  // exact frame index
      
      text_37.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GSQS1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GSQS1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GSQS1' ---
    for (const thisComponent of GSQS1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_9.response', slider_9.getRating());
    psychoJS.experiment.addData('slider_9.rt', slider_9.getRT());
    psychoJS.experiment.addData('slider_10.response', slider_10.getRating());
    psychoJS.experiment.addData('slider_10.rt', slider_10.getRT());
    psychoJS.experiment.addData('slider_11.response', slider_11.getRating());
    psychoJS.experiment.addData('slider_11.rt', slider_11.getRT());
    psychoJS.experiment.addData('slider_12.response', slider_12.getRating());
    psychoJS.experiment.addData('slider_12.rt', slider_12.getRT());
    psychoJS.experiment.addData('slider_13.response', slider_13.getRating());
    psychoJS.experiment.addData('slider_13.rt', slider_13.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_23.corr, level);
    }
    psychoJS.experiment.addData('key_resp_23.keys', key_resp_23.keys);
    if (typeof key_resp_23.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_23.rt', key_resp_23.rt);
        routineTimer.reset();
        }
    
    key_resp_23.stop();
    // the Routine "GSQS1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_24_allKeys;
var GSQS2Components;
function GSQS2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GSQS2' ---
    t = 0;
    GSQS2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_14.reset()
    slider_15.reset()
    slider_16.reset()
    slider_17.reset()
    slider_18.reset()
    key_resp_24.keys = undefined;
    key_resp_24.rt = undefined;
    _key_resp_24_allKeys = [];
    // keep track of which components have finished
    GSQS2Components = [];
    GSQS2Components.push(text_38);
    GSQS2Components.push(slider_14);
    GSQS2Components.push(text_39);
    GSQS2Components.push(slider_15);
    GSQS2Components.push(text_40);
    GSQS2Components.push(slider_16);
    GSQS2Components.push(text_41);
    GSQS2Components.push(slider_17);
    GSQS2Components.push(text_42);
    GSQS2Components.push(slider_18);
    GSQS2Components.push(key_resp_24);
    GSQS2Components.push(text_43);
    
    for (const thisComponent of GSQS2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GSQS2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GSQS2' ---
    // get current time
    t = GSQS2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_38* updates
    if (t >= 0.0 && text_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_38.tStart = t;  // (not accounting for frame time here)
      text_38.frameNStart = frameN;  // exact frame index
      
      text_38.setAutoDraw(true);
    }

    
    // *slider_14* updates
    if (t >= 0.0 && slider_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_14.tStart = t;  // (not accounting for frame time here)
      slider_14.frameNStart = frameN;  // exact frame index
      
      slider_14.setAutoDraw(true);
    }

    
    // *text_39* updates
    if (t >= 0.0 && text_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_39.tStart = t;  // (not accounting for frame time here)
      text_39.frameNStart = frameN;  // exact frame index
      
      text_39.setAutoDraw(true);
    }

    
    // *slider_15* updates
    if (t >= 0.0 && slider_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_15.tStart = t;  // (not accounting for frame time here)
      slider_15.frameNStart = frameN;  // exact frame index
      
      slider_15.setAutoDraw(true);
    }

    
    // *text_40* updates
    if (t >= 0.0 && text_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_40.tStart = t;  // (not accounting for frame time here)
      text_40.frameNStart = frameN;  // exact frame index
      
      text_40.setAutoDraw(true);
    }

    
    // *slider_16* updates
    if (t >= 0.0 && slider_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_16.tStart = t;  // (not accounting for frame time here)
      slider_16.frameNStart = frameN;  // exact frame index
      
      slider_16.setAutoDraw(true);
    }

    
    // *text_41* updates
    if (t >= 0.0 && text_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_41.tStart = t;  // (not accounting for frame time here)
      text_41.frameNStart = frameN;  // exact frame index
      
      text_41.setAutoDraw(true);
    }

    
    // *slider_17* updates
    if (t >= 0.0 && slider_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_17.tStart = t;  // (not accounting for frame time here)
      slider_17.frameNStart = frameN;  // exact frame index
      
      slider_17.setAutoDraw(true);
    }

    
    // *text_42* updates
    if (t >= 0.0 && text_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_42.tStart = t;  // (not accounting for frame time here)
      text_42.frameNStart = frameN;  // exact frame index
      
      text_42.setAutoDraw(true);
    }

    
    // *slider_18* updates
    if (t >= 0.0 && slider_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_18.tStart = t;  // (not accounting for frame time here)
      slider_18.frameNStart = frameN;  // exact frame index
      
      slider_18.setAutoDraw(true);
    }

    
    // *key_resp_24* updates
    if ((slider_18.rating) && key_resp_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_24.tStart = t;  // (not accounting for frame time here)
      key_resp_24.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_24.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.clearEvents(); });
    }

    if (key_resp_24.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_24.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_24_allKeys = _key_resp_24_allKeys.concat(theseKeys);
      if (_key_resp_24_allKeys.length > 0) {
        key_resp_24.keys = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].name;  // just the last key pressed
        key_resp_24.rt = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_43* updates
    if ((slider_18.rating) && text_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_43.tStart = t;  // (not accounting for frame time here)
      text_43.frameNStart = frameN;  // exact frame index
      
      text_43.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GSQS2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GSQS2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GSQS2' ---
    for (const thisComponent of GSQS2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_14.response', slider_14.getRating());
    psychoJS.experiment.addData('slider_14.rt', slider_14.getRT());
    psychoJS.experiment.addData('slider_15.response', slider_15.getRating());
    psychoJS.experiment.addData('slider_15.rt', slider_15.getRT());
    psychoJS.experiment.addData('slider_16.response', slider_16.getRating());
    psychoJS.experiment.addData('slider_16.rt', slider_16.getRT());
    psychoJS.experiment.addData('slider_17.response', slider_17.getRating());
    psychoJS.experiment.addData('slider_17.rt', slider_17.getRT());
    psychoJS.experiment.addData('slider_18.response', slider_18.getRating());
    psychoJS.experiment.addData('slider_18.rt', slider_18.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_24.corr, level);
    }
    psychoJS.experiment.addData('key_resp_24.keys', key_resp_24.keys);
    if (typeof key_resp_24.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_24.rt', key_resp_24.rt);
        routineTimer.reset();
        }
    
    key_resp_24.stop();
    // the Routine "GSQS2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_25_allKeys;
var GSQS3Components;
function GSQS3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GSQS3' ---
    t = 0;
    GSQS3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_19.reset()
    slider_20.reset()
    slider_21.reset()
    slider_22.reset()
    slider_23.reset()
    key_resp_25.keys = undefined;
    key_resp_25.rt = undefined;
    _key_resp_25_allKeys = [];
    // keep track of which components have finished
    GSQS3Components = [];
    GSQS3Components.push(text_44);
    GSQS3Components.push(slider_19);
    GSQS3Components.push(text_45);
    GSQS3Components.push(slider_20);
    GSQS3Components.push(text_46);
    GSQS3Components.push(slider_21);
    GSQS3Components.push(text_47);
    GSQS3Components.push(slider_22);
    GSQS3Components.push(text_48);
    GSQS3Components.push(slider_23);
    GSQS3Components.push(key_resp_25);
    GSQS3Components.push(text_49);
    
    for (const thisComponent of GSQS3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GSQS3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GSQS3' ---
    // get current time
    t = GSQS3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_44* updates
    if (t >= 0.0 && text_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_44.tStart = t;  // (not accounting for frame time here)
      text_44.frameNStart = frameN;  // exact frame index
      
      text_44.setAutoDraw(true);
    }

    
    // *slider_19* updates
    if (t >= 0.0 && slider_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_19.tStart = t;  // (not accounting for frame time here)
      slider_19.frameNStart = frameN;  // exact frame index
      
      slider_19.setAutoDraw(true);
    }

    
    // *text_45* updates
    if (t >= 0.0 && text_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_45.tStart = t;  // (not accounting for frame time here)
      text_45.frameNStart = frameN;  // exact frame index
      
      text_45.setAutoDraw(true);
    }

    
    // *slider_20* updates
    if (t >= 0.0 && slider_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_20.tStart = t;  // (not accounting for frame time here)
      slider_20.frameNStart = frameN;  // exact frame index
      
      slider_20.setAutoDraw(true);
    }

    
    // *text_46* updates
    if (t >= 0.0 && text_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_46.tStart = t;  // (not accounting for frame time here)
      text_46.frameNStart = frameN;  // exact frame index
      
      text_46.setAutoDraw(true);
    }

    
    // *slider_21* updates
    if (t >= 0.0 && slider_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_21.tStart = t;  // (not accounting for frame time here)
      slider_21.frameNStart = frameN;  // exact frame index
      
      slider_21.setAutoDraw(true);
    }

    
    // *text_47* updates
    if (t >= 0.0 && text_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_47.tStart = t;  // (not accounting for frame time here)
      text_47.frameNStart = frameN;  // exact frame index
      
      text_47.setAutoDraw(true);
    }

    
    // *slider_22* updates
    if (t >= 0.0 && slider_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_22.tStart = t;  // (not accounting for frame time here)
      slider_22.frameNStart = frameN;  // exact frame index
      
      slider_22.setAutoDraw(true);
    }

    
    // *text_48* updates
    if (t >= 0.0 && text_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_48.tStart = t;  // (not accounting for frame time here)
      text_48.frameNStart = frameN;  // exact frame index
      
      text_48.setAutoDraw(true);
    }

    
    // *slider_23* updates
    if (t >= 0.0 && slider_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_23.tStart = t;  // (not accounting for frame time here)
      slider_23.frameNStart = frameN;  // exact frame index
      
      slider_23.setAutoDraw(true);
    }

    
    // *key_resp_25* updates
    if ((slider_23.rating) && key_resp_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_25.tStart = t;  // (not accounting for frame time here)
      key_resp_25.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_25.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.clearEvents(); });
    }

    if (key_resp_25.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_25.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_25_allKeys = _key_resp_25_allKeys.concat(theseKeys);
      if (_key_resp_25_allKeys.length > 0) {
        key_resp_25.keys = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].name;  // just the last key pressed
        key_resp_25.rt = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_49* updates
    if ((slider_23.rating) && text_49.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_49.tStart = t;  // (not accounting for frame time here)
      text_49.frameNStart = frameN;  // exact frame index
      
      text_49.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GSQS3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GSQS3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GSQS3' ---
    for (const thisComponent of GSQS3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_19.response', slider_19.getRating());
    psychoJS.experiment.addData('slider_19.rt', slider_19.getRT());
    psychoJS.experiment.addData('slider_20.response', slider_20.getRating());
    psychoJS.experiment.addData('slider_20.rt', slider_20.getRT());
    psychoJS.experiment.addData('slider_21.response', slider_21.getRating());
    psychoJS.experiment.addData('slider_21.rt', slider_21.getRT());
    psychoJS.experiment.addData('slider_22.response', slider_22.getRating());
    psychoJS.experiment.addData('slider_22.rt', slider_22.getRT());
    psychoJS.experiment.addData('slider_23.response', slider_23.getRating());
    psychoJS.experiment.addData('slider_23.rt', slider_23.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_25.corr, level);
    }
    psychoJS.experiment.addData('key_resp_25.keys', key_resp_25.keys);
    if (typeof key_resp_25.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_25.rt', key_resp_25.rt);
        routineTimer.reset();
        }
    
    key_resp_25.stop();
    // the Routine "GSQS3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_17_allKeys;
var PN_aff_questionsComponents;
function PN_aff_questionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PN_aff_questions' ---
    t = 0;
    PN_aff_questionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_4.reset()
    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    // keep track of which components have finished
    PN_aff_questionsComponents = [];
    PN_aff_questionsComponents.push(text_21);
    PN_aff_questionsComponents.push(slider_4);
    PN_aff_questionsComponents.push(text_23);
    PN_aff_questionsComponents.push(key_resp_17);
    
    for (const thisComponent of PN_aff_questionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PN_aff_questionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PN_aff_questions' ---
    // get current time
    t = PN_aff_questionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }

    
    // *slider_4* updates
    if (t >= 0.0 && slider_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_4.tStart = t;  // (not accounting for frame time here)
      slider_4.frameNStart = frameN;  // exact frame index
      
      slider_4.setAutoDraw(true);
    }

    
    // *text_23* updates
    if ((slider_4.rating) && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }

    
    // *key_resp_17* updates
    if ((slider_4.rating) && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_17.tStart = t;  // (not accounting for frame time here)
      key_resp_17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.clearEvents(); });
    }

    if (key_resp_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_17.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
      if (_key_resp_17_allKeys.length > 0) {
        key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PN_aff_questionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PN_aff_questionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PN_aff_questions' ---
    for (const thisComponent of PN_aff_questionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_4.response', slider_4.getRating());
    psychoJS.experiment.addData('slider_4.rt', slider_4.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_17.corr, level);
    }
    psychoJS.experiment.addData('key_resp_17.keys', key_resp_17.keys);
    if (typeof key_resp_17.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_17.rt', key_resp_17.rt);
        routineTimer.reset();
        }
    
    key_resp_17.stop();
    // the Routine "PN_aff_questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_18_allKeys;
var PN_aff_questions2Components;
function PN_aff_questions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PN_aff_questions2' ---
    t = 0;
    PN_aff_questions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_5.reset()
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    // keep track of which components have finished
    PN_aff_questions2Components = [];
    PN_aff_questions2Components.push(text_22);
    PN_aff_questions2Components.push(slider_5);
    PN_aff_questions2Components.push(text_24);
    PN_aff_questions2Components.push(key_resp_18);
    
    for (const thisComponent of PN_aff_questions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PN_aff_questions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PN_aff_questions2' ---
    // get current time
    t = PN_aff_questions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }

    
    // *slider_5* updates
    if (t >= 0.0 && slider_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_5.tStart = t;  // (not accounting for frame time here)
      slider_5.frameNStart = frameN;  // exact frame index
      
      slider_5.setAutoDraw(true);
    }

    
    // *text_24* updates
    if ((slider_5.rating) && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }

    
    // *key_resp_18* updates
    if ((slider_5.rating) && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
    }

    if (key_resp_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_18.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
      if (_key_resp_18_allKeys.length > 0) {
        key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PN_aff_questions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PN_aff_questions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PN_aff_questions2' ---
    for (const thisComponent of PN_aff_questions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_5.response', slider_5.getRating());
    psychoJS.experiment.addData('slider_5.rt', slider_5.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_18.corr, level);
    }
    psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
    if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
        routineTimer.reset();
        }
    
    key_resp_18.stop();
    // the Routine "PN_aff_questions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_19_allKeys;
var PN_aff_questions3Components;
function PN_aff_questions3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PN_aff_questions3' ---
    t = 0;
    PN_aff_questions3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider.reset()
    key_resp_19.keys = undefined;
    key_resp_19.rt = undefined;
    _key_resp_19_allKeys = [];
    // keep track of which components have finished
    PN_aff_questions3Components = [];
    PN_aff_questions3Components.push(text_25);
    PN_aff_questions3Components.push(slider);
    PN_aff_questions3Components.push(text_26);
    PN_aff_questions3Components.push(key_resp_19);
    
    for (const thisComponent of PN_aff_questions3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PN_aff_questions3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PN_aff_questions3' ---
    // get current time
    t = PN_aff_questions3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *text_26* updates
    if ((slider.rating) && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }

    
    // *key_resp_19* updates
    if ((slider.rating) && key_resp_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_19.tStart = t;  // (not accounting for frame time here)
      key_resp_19.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_19.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.clearEvents(); });
    }

    if (key_resp_19.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_19.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_19_allKeys = _key_resp_19_allKeys.concat(theseKeys);
      if (_key_resp_19_allKeys.length > 0) {
        key_resp_19.keys = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].name;  // just the last key pressed
        key_resp_19.rt = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PN_aff_questions3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PN_aff_questions3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PN_aff_questions3' ---
    for (const thisComponent of PN_aff_questions3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_19.corr, level);
    }
    psychoJS.experiment.addData('key_resp_19.keys', key_resp_19.keys);
    if (typeof key_resp_19.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_19.rt', key_resp_19.rt);
        routineTimer.reset();
        }
    
    key_resp_19.stop();
    // the Routine "PN_aff_questions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var wlcComponents;
function wlcRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wlc' ---
    t = 0;
    wlcClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    wlcComponents = [];
    wlcComponents.push(text);
    wlcComponents.push(key_resp);
    wlcComponents.push(mouse_4);
    
    for (const thisComponent of wlcComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function wlcRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wlc' ---
    // get current time
    t = wlcClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_4.getPos();
          mouse_4.x.push(_mouseXYs[0]);
          mouse_4.y.push(_mouseXYs[1]);
          mouse_4.leftButton.push(_mouseButtons[0]);
          mouse_4.midButton.push(_mouseButtons[1]);
          mouse_4.rightButton.push(_mouseButtons[2]);
          mouse_4.time.push(mouse_4.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wlcComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wlcRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wlc' ---
    for (const thisComponent of wlcComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_4.x) {  psychoJS.experiment.addData('mouse_4.x', mouse_4.x[0])};
    if (mouse_4.y) {  psychoJS.experiment.addData('mouse_4.y', mouse_4.y[0])};
    if (mouse_4.leftButton) {  psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton[0])};
    if (mouse_4.midButton) {  psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton[0])};
    if (mouse_4.rightButton) {  psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton[0])};
    if (mouse_4.time) {  psychoJS.experiment.addData('mouse_4.time', mouse_4.time[0])};
    
    // the Routine "wlc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var ins_square_1Components;
function ins_square_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins_square_1' ---
    t = 0;
    ins_square_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // setup some python lists for storing info about the mouse_5
    // current position of the mouse:
    mouse_5.x = [];
    mouse_5.y = [];
    mouse_5.leftButton = [];
    mouse_5.midButton = [];
    mouse_5.rightButton = [];
    mouse_5.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ins_square_1Components = [];
    ins_square_1Components.push(text_8);
    ins_square_1Components.push(key_resp_8);
    ins_square_1Components.push(mouse_5);
    
    for (const thisComponent of ins_square_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ins_square_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins_square_1' ---
    // get current time
    t = ins_square_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_5* updates
    if (t >= 0.0 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_5.getPos();
          mouse_5.x.push(_mouseXYs[0]);
          mouse_5.y.push(_mouseXYs[1]);
          mouse_5.leftButton.push(_mouseButtons[0]);
          mouse_5.midButton.push(_mouseButtons[1]);
          mouse_5.rightButton.push(_mouseButtons[2]);
          mouse_5.time.push(mouse_5.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ins_square_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins_square_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins_square_1' ---
    for (const thisComponent of ins_square_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_5.x) {  psychoJS.experiment.addData('mouse_5.x', mouse_5.x[0])};
    if (mouse_5.y) {  psychoJS.experiment.addData('mouse_5.y', mouse_5.y[0])};
    if (mouse_5.leftButton) {  psychoJS.experiment.addData('mouse_5.leftButton', mouse_5.leftButton[0])};
    if (mouse_5.midButton) {  psychoJS.experiment.addData('mouse_5.midButton', mouse_5.midButton[0])};
    if (mouse_5.rightButton) {  psychoJS.experiment.addData('mouse_5.rightButton', mouse_5.rightButton[0])};
    if (mouse_5.time) {  psychoJS.experiment.addData('mouse_5.time', mouse_5.time[0])};
    
    // the Routine "ins_square_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_square_2;
function trials_square_2LoopBegin(trials_square_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_square_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: how_many_prac_loops, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_square_2'
    });
    psychoJS.experiment.addLoop(trials_square_2); // add the loop to the experiment
    currentLoop = trials_square_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_square_2 of trials_square_2) {
      snapshot = trials_square_2.getSnapshot();
      trials_square_2LoopScheduler.add(importConditions(snapshot));
      trials_square_2LoopScheduler.add(square_helperRoutineBegin(snapshot));
      trials_square_2LoopScheduler.add(square_helperRoutineEachFrame());
      trials_square_2LoopScheduler.add(square_helperRoutineEnd(snapshot));
      trials_square_2LoopScheduler.add(square_levelRoutineBegin(snapshot));
      trials_square_2LoopScheduler.add(square_levelRoutineEachFrame());
      trials_square_2LoopScheduler.add(square_levelRoutineEnd(snapshot));
      const trials_squareLoopScheduler = new Scheduler(psychoJS);
      trials_square_2LoopScheduler.add(trials_squareLoopBegin(trials_squareLoopScheduler, snapshot));
      trials_square_2LoopScheduler.add(trials_squareLoopScheduler);
      trials_square_2LoopScheduler.add(trials_squareLoopEnd);
      const trials_square_recLoopScheduler = new Scheduler(psychoJS);
      trials_square_2LoopScheduler.add(trials_square_recLoopBegin(trials_square_recLoopScheduler, snapshot));
      trials_square_2LoopScheduler.add(trials_square_recLoopScheduler);
      trials_square_2LoopScheduler.add(trials_square_recLoopEnd);
      trials_square_2LoopScheduler.add(next_setRoutineBegin(snapshot));
      trials_square_2LoopScheduler.add(next_setRoutineEachFrame());
      trials_square_2LoopScheduler.add(next_setRoutineEnd(snapshot));
      trials_square_2LoopScheduler.add(trials_square_2LoopEndIteration(trials_square_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_square;
function trials_squareLoopBegin(trials_squareLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_square = new TrialHandler({
      psychoJS: psychoJS,
      nReps: thisloop_item_number, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_square'
    });
    psychoJS.experiment.addLoop(trials_square); // add the loop to the experiment
    currentLoop = trials_square;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_square of trials_square) {
      snapshot = trials_square.getSnapshot();
      trials_squareLoopScheduler.add(importConditions(snapshot));
      trials_squareLoopScheduler.add(squareRoutineBegin(snapshot));
      trials_squareLoopScheduler.add(squareRoutineEachFrame());
      trials_squareLoopScheduler.add(squareRoutineEnd(snapshot));
      trials_squareLoopScheduler.add(trials_squareLoopEndIteration(trials_squareLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_squareLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_square);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_squareLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_square_rec;
function trials_square_recLoopBegin(trials_square_recLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_square_rec = new TrialHandler({
      psychoJS: psychoJS,
      nReps: thisloop_item_number, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_square_rec'
    });
    psychoJS.experiment.addLoop(trials_square_rec); // add the loop to the experiment
    currentLoop = trials_square_rec;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_square_rec of trials_square_rec) {
      snapshot = trials_square_rec.getSnapshot();
      trials_square_recLoopScheduler.add(importConditions(snapshot));
      trials_square_recLoopScheduler.add(square_recRoutineBegin(snapshot));
      trials_square_recLoopScheduler.add(square_recRoutineEachFrame());
      trials_square_recLoopScheduler.add(square_recRoutineEnd(snapshot));
      trials_square_recLoopScheduler.add(square_rec_g_rRoutineBegin(snapshot));
      trials_square_recLoopScheduler.add(square_rec_g_rRoutineEachFrame());
      trials_square_recLoopScheduler.add(square_rec_g_rRoutineEnd(snapshot));
      trials_square_recLoopScheduler.add(trials_square_recLoopEndIteration(trials_square_recLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_square_recLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_square_rec);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_square_recLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_square_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_square_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_square_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_prac2;
function trials_prac2LoopBegin(trials_prac2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_prac2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_prac2'
    });
    psychoJS.experiment.addLoop(trials_prac2); // add the loop to the experiment
    currentLoop = trials_prac2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_prac2 of trials_prac2) {
      snapshot = trials_prac2.getSnapshot();
      trials_prac2LoopScheduler.add(importConditions(snapshot));
      trials_prac2LoopScheduler.add(prac_sym_helperRoutineBegin(snapshot));
      trials_prac2LoopScheduler.add(prac_sym_helperRoutineEachFrame());
      trials_prac2LoopScheduler.add(prac_sym_helperRoutineEnd(snapshot));
      const trials_pracLoopScheduler = new Scheduler(psychoJS);
      trials_prac2LoopScheduler.add(trials_pracLoopBegin(trials_pracLoopScheduler, snapshot));
      trials_prac2LoopScheduler.add(trials_pracLoopScheduler);
      trials_prac2LoopScheduler.add(trials_pracLoopEnd);
      trials_prac2LoopScheduler.add(prac_sym_fbRoutineBegin(snapshot));
      trials_prac2LoopScheduler.add(prac_sym_fbRoutineEachFrame());
      trials_prac2LoopScheduler.add(prac_sym_fbRoutineEnd(snapshot));
      trials_prac2LoopScheduler.add(trials_prac2LoopEndIteration(trials_prac2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_prac;
function trials_pracLoopBegin(trials_pracLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_prac = new TrialHandler({
      psychoJS: psychoJS,
      nReps: pracSymmTrialNumber, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_prac'
    });
    psychoJS.experiment.addLoop(trials_prac); // add the loop to the experiment
    currentLoop = trials_prac;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_prac of trials_prac) {
      snapshot = trials_prac.getSnapshot();
      trials_pracLoopScheduler.add(importConditions(snapshot));
      trials_pracLoopScheduler.add(prac_symRoutineBegin(snapshot));
      trials_pracLoopScheduler.add(prac_symRoutineEachFrame());
      trials_pracLoopScheduler.add(prac_symRoutineEnd(snapshot));
      trials_pracLoopScheduler.add(prac_sym_g_rRoutineBegin(snapshot));
      trials_pracLoopScheduler.add(prac_sym_g_rRoutineEachFrame());
      trials_pracLoopScheduler.add(prac_sym_g_rRoutineEnd(snapshot));
      trials_pracLoopScheduler.add(trials_pracLoopEndIteration(trials_pracLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_pracLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_prac);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_pracLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_prac2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_prac2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_prac2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_both;
function trials_bothLoopBegin(trials_bothLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_both = new TrialHandler({
      psychoJS: psychoJS,
      nReps: how_many_prac_loops, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_both'
    });
    psychoJS.experiment.addLoop(trials_both); // add the loop to the experiment
    currentLoop = trials_both;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_both of trials_both) {
      snapshot = trials_both.getSnapshot();
      trials_bothLoopScheduler.add(importConditions(snapshot));
      trials_bothLoopScheduler.add(both_helperRoutineBegin(snapshot));
      trials_bothLoopScheduler.add(both_helperRoutineEachFrame());
      trials_bothLoopScheduler.add(both_helperRoutineEnd(snapshot));
      trials_bothLoopScheduler.add(both_levelRoutineBegin(snapshot));
      trials_bothLoopScheduler.add(both_levelRoutineEachFrame());
      trials_bothLoopScheduler.add(both_levelRoutineEnd(snapshot));
      const trials_both_squareLoopScheduler = new Scheduler(psychoJS);
      trials_bothLoopScheduler.add(trials_both_squareLoopBegin(trials_both_squareLoopScheduler, snapshot));
      trials_bothLoopScheduler.add(trials_both_squareLoopScheduler);
      trials_bothLoopScheduler.add(trials_both_squareLoopEnd);
      const trials_both_square_recLoopScheduler = new Scheduler(psychoJS);
      trials_bothLoopScheduler.add(trials_both_square_recLoopBegin(trials_both_square_recLoopScheduler, snapshot));
      trials_bothLoopScheduler.add(trials_both_square_recLoopScheduler);
      trials_bothLoopScheduler.add(trials_both_square_recLoopEnd);
      trials_bothLoopScheduler.add(both_next_setRoutineBegin(snapshot));
      trials_bothLoopScheduler.add(both_next_setRoutineEachFrame());
      trials_bothLoopScheduler.add(both_next_setRoutineEnd(snapshot));
      trials_bothLoopScheduler.add(trials_bothLoopEndIteration(trials_bothLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_both_square;
function trials_both_squareLoopBegin(trials_both_squareLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_both_square = new TrialHandler({
      psychoJS: psychoJS,
      nReps: thisloop_item_number, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_both_square'
    });
    psychoJS.experiment.addLoop(trials_both_square); // add the loop to the experiment
    currentLoop = trials_both_square;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_both_square of trials_both_square) {
      snapshot = trials_both_square.getSnapshot();
      trials_both_squareLoopScheduler.add(importConditions(snapshot));
      trials_both_squareLoopScheduler.add(both_squareRoutineBegin(snapshot));
      trials_both_squareLoopScheduler.add(both_squareRoutineEachFrame());
      trials_both_squareLoopScheduler.add(both_squareRoutineEnd(snapshot));
      trials_both_squareLoopScheduler.add(both_symRoutineBegin(snapshot));
      trials_both_squareLoopScheduler.add(both_symRoutineEachFrame());
      trials_both_squareLoopScheduler.add(both_symRoutineEnd(snapshot));
      trials_both_squareLoopScheduler.add(both_sym_g_rRoutineBegin(snapshot));
      trials_both_squareLoopScheduler.add(both_sym_g_rRoutineEachFrame());
      trials_both_squareLoopScheduler.add(both_sym_g_rRoutineEnd(snapshot));
      trials_both_squareLoopScheduler.add(trials_both_squareLoopEndIteration(trials_both_squareLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_both_squareLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_both_square);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_both_squareLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_both_square_rec;
function trials_both_square_recLoopBegin(trials_both_square_recLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_both_square_rec = new TrialHandler({
      psychoJS: psychoJS,
      nReps: thisloop_item_number, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_both_square_rec'
    });
    psychoJS.experiment.addLoop(trials_both_square_rec); // add the loop to the experiment
    currentLoop = trials_both_square_rec;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_both_square_rec of trials_both_square_rec) {
      snapshot = trials_both_square_rec.getSnapshot();
      trials_both_square_recLoopScheduler.add(importConditions(snapshot));
      trials_both_square_recLoopScheduler.add(both_square_recRoutineBegin(snapshot));
      trials_both_square_recLoopScheduler.add(both_square_recRoutineEachFrame());
      trials_both_square_recLoopScheduler.add(both_square_recRoutineEnd(snapshot));
      trials_both_square_recLoopScheduler.add(both_square_rec_g_rRoutineBegin(snapshot));
      trials_both_square_recLoopScheduler.add(both_square_rec_g_rRoutineEachFrame());
      trials_both_square_recLoopScheduler.add(both_square_rec_g_rRoutineEnd(snapshot));
      trials_both_square_recLoopScheduler.add(trials_both_square_recLoopEndIteration(trials_both_square_recLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_both_square_recLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_both_square_rec);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_both_square_recLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_bothLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_both);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_bothLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var random_square_names;
var i;
var corr_square_cliqued;
var square_helperComponents;
function square_helperRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'square_helper' ---
    t = 0;
    square_helperClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_square_helper
    thisloop_item_number = prac_loop_lengths[counter];
    
    random_square_names = shuffle(square_names).slice(0, thisloop_item_number);
    
    i = 0;
    recall_counter = 0;
    corr_square_cliqued = 0;
    correct_square_counter = 0;
    
    
    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
    }
    
    // keep track of which components have finished
    square_helperComponents = [];
    
    for (const thisComponent of square_helperComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function square_helperRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'square_helper' ---
    // get current time
    t = square_helperClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of square_helperComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function square_helperRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'square_helper' ---
    for (const thisComponent of square_helperComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_square_helper
    counter += 1;
    
    // the Routine "square_helper" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var square_levelComponents;
function square_levelRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'square_level' ---
    t = 0;
    square_levelClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    document.body.style.cursor='none';
    // keep track of which components have finished
    square_levelComponents = [];
    square_levelComponents.push(text_level_1);
    square_levelComponents.push(text_level_2);
    
    for (const thisComponent of square_levelComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function square_levelRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'square_level' ---
    // get current time
    t = square_levelClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_level_1* updates
    if (t >= 0.0 && text_level_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_level_1.tStart = t;  // (not accounting for frame time here)
      text_level_1.frameNStart = frameN;  // exact frame index
      
      text_level_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_level_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_level_1.setAutoDraw(false);
    }
    
    // *text_level_2* updates
    if (t >= 0.0 && text_level_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_level_2.tStart = t;  // (not accounting for frame time here)
      text_level_2.frameNStart = frameN;  // exact frame index
      
      text_level_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_level_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_level_2.setAutoDraw(false);
    }
    
    if (text_level_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_level_2.setText(thisloop_item_number, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of square_levelComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function square_levelRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'square_level' ---
    for (const thisComponent of square_levelComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var square_name_show;
var coordinates;
var squareComponents;
function squareRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'square' ---
    t = 0;
    squareClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.150000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_square
    square_name_show = random_square_names[i];
    coordinates = square_dict[square_name_show];
    square_rand.setPos(coordinates);
    
    document.body.style.cursor='none';
    
    // keep track of which components have finished
    squareComponents = [];
    squareComponents.push(fixation2);
    squareComponents.push(grid);
    squareComponents.push(square_rand);
    
    for (const thisComponent of squareComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function squareRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'square' ---
    // get current time
    t = squareClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation2* updates
    if (t >= 0 && fixation2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation2.tStart = t;  // (not accounting for frame time here)
      fixation2.frameNStart = frameN;  // exact frame index
      
      fixation2.setAutoDraw(true);
    }

    frameRemains = 0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation2.setAutoDraw(false);
    }
    
    // *grid* updates
    if (t >= 0 && grid.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid.tStart = t;  // (not accounting for frame time here)
      grid.frameNStart = frameN;  // exact frame index
      
      grid.setAutoDraw(true);
    }

    frameRemains = 0 + 1.15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid.setAutoDraw(false);
    }
    
    // *square_rand* updates
    if (t >= 0.5 && square_rand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_rand.tStart = t;  // (not accounting for frame time here)
      square_rand.frameNStart = frameN;  // exact frame index
      
      square_rand.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.65 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_rand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_rand.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of squareComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function squareRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'square' ---
    for (const thisComponent of squareComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_square
    i += 1;
    psychoJS.experiment.addData("squareShown", square_name_show);
    document.body.style.cursor='auto';
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var square_recComponents;
function square_recRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'square_rec' ---
    t = 0;
    square_recClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    square_recComponents = [];
    square_recComponents.push(text_9);
    square_recComponents.push(grid2);
    square_recComponents.push(mouse);
    square_recComponents.push(square_0);
    square_recComponents.push(square_1);
    square_recComponents.push(square_2);
    square_recComponents.push(square_3);
    square_recComponents.push(square_4);
    square_recComponents.push(square_5);
    square_recComponents.push(square_6);
    square_recComponents.push(square_7);
    square_recComponents.push(square_8);
    square_recComponents.push(square_9);
    square_recComponents.push(square_10);
    square_recComponents.push(square_11);
    square_recComponents.push(square_12);
    square_recComponents.push(square_13);
    square_recComponents.push(square_14);
    square_recComponents.push(square_15);
    
    for (const thisComponent of square_recComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function square_recRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'square_rec' ---
    // get current time
    t = square_recClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *grid2* updates
    if (t >= 0 && grid2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid2.tStart = t;  // (not accounting for frame time here)
      grid2.frameNStart = frameN;  // exact frame index
      
      grid2.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [square_0, square_1, square_2, square_3, square_4, square_5, square_6, square_7, square_8, square_9, square_10, square_11, square_12, square_13, square_14, square_15]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *square_0* updates
    if (t >= 0 && square_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_0.tStart = t;  // (not accounting for frame time here)
      square_0.frameNStart = frameN;  // exact frame index
      
      square_0.setAutoDraw(true);
    }

    
    // *square_1* updates
    if (t >= 0 && square_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_1.tStart = t;  // (not accounting for frame time here)
      square_1.frameNStart = frameN;  // exact frame index
      
      square_1.setAutoDraw(true);
    }

    
    // *square_2* updates
    if (t >= 0 && square_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_2.tStart = t;  // (not accounting for frame time here)
      square_2.frameNStart = frameN;  // exact frame index
      
      square_2.setAutoDraw(true);
    }

    
    // *square_3* updates
    if (t >= 0 && square_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_3.tStart = t;  // (not accounting for frame time here)
      square_3.frameNStart = frameN;  // exact frame index
      
      square_3.setAutoDraw(true);
    }

    
    // *square_4* updates
    if (t >= 0 && square_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_4.tStart = t;  // (not accounting for frame time here)
      square_4.frameNStart = frameN;  // exact frame index
      
      square_4.setAutoDraw(true);
    }

    
    // *square_5* updates
    if (t >= 0 && square_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_5.tStart = t;  // (not accounting for frame time here)
      square_5.frameNStart = frameN;  // exact frame index
      
      square_5.setAutoDraw(true);
    }

    
    // *square_6* updates
    if (t >= 0 && square_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_6.tStart = t;  // (not accounting for frame time here)
      square_6.frameNStart = frameN;  // exact frame index
      
      square_6.setAutoDraw(true);
    }

    
    // *square_7* updates
    if (t >= 0 && square_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_7.tStart = t;  // (not accounting for frame time here)
      square_7.frameNStart = frameN;  // exact frame index
      
      square_7.setAutoDraw(true);
    }

    
    // *square_8* updates
    if (t >= 0 && square_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_8.tStart = t;  // (not accounting for frame time here)
      square_8.frameNStart = frameN;  // exact frame index
      
      square_8.setAutoDraw(true);
    }

    
    // *square_9* updates
    if (t >= 0 && square_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_9.tStart = t;  // (not accounting for frame time here)
      square_9.frameNStart = frameN;  // exact frame index
      
      square_9.setAutoDraw(true);
    }

    
    // *square_10* updates
    if (t >= 0 && square_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_10.tStart = t;  // (not accounting for frame time here)
      square_10.frameNStart = frameN;  // exact frame index
      
      square_10.setAutoDraw(true);
    }

    
    // *square_11* updates
    if (t >= 0 && square_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_11.tStart = t;  // (not accounting for frame time here)
      square_11.frameNStart = frameN;  // exact frame index
      
      square_11.setAutoDraw(true);
    }

    
    // *square_12* updates
    if (t >= 0 && square_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_12.tStart = t;  // (not accounting for frame time here)
      square_12.frameNStart = frameN;  // exact frame index
      
      square_12.setAutoDraw(true);
    }

    
    // *square_13* updates
    if (t >= 0 && square_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_13.tStart = t;  // (not accounting for frame time here)
      square_13.frameNStart = frameN;  // exact frame index
      
      square_13.setAutoDraw(true);
    }

    
    // *square_14* updates
    if (t >= 0 && square_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_14.tStart = t;  // (not accounting for frame time here)
      square_14.frameNStart = frameN;  // exact frame index
      
      square_14.setAutoDraw(true);
    }

    
    // *square_15* updates
    if (t >= 0 && square_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_15.tStart = t;  // (not accounting for frame time here)
      square_15.frameNStart = frameN;  // exact frame index
      
      square_15.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of square_recComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function square_recRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'square_rec' ---
    for (const thisComponent of square_recComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // the Routine "square_rec" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var square_rec_g_rComponents;
function square_rec_g_rRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'square_rec_g_r' ---
    t = 0;
    square_rec_g_rClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_square_rec_g_r
    if (((mouse.clicked_name[0] === "square_0") && (random_square_names[recall_counter] === "square_0"))) {
        corr_square_cliqued ++;
        correct_square_counter += 1;
        square_16.fillColor = "#006400";
    } else {
        if (((mouse.clicked_name[0] === "square_1") && (random_square_names[recall_counter] === "square_1"))) {
            corr_square_cliqued ++;
            correct_square_counter += 1;
            square_17.fillColor = "#006400";
        } else {
            if (((mouse.clicked_name[0] === "square_2") && (random_square_names[recall_counter] === "square_2"))) {
                corr_square_cliqued ++;
                correct_square_counter += 1;
                square_18.fillColor = "#006400";
            } else {
                if (((mouse.clicked_name[0] === "square_3") && (random_square_names[recall_counter] === "square_3"))) {
                    corr_square_cliqued ++;
                    correct_square_counter += 1;
                    square_19.fillColor = "#006400";
                } else {
                    if (((mouse.clicked_name[0] === "square_4") && (random_square_names[recall_counter] === "square_4"))) {
                        corr_square_cliqued ++;
                        correct_square_counter += 1;
                        square_20.fillColor = "#006400";
                    } else {
                        if (((mouse.clicked_name[0] === "square_5") && (random_square_names[recall_counter] === "square_5"))) {
                            corr_square_cliqued ++;
                            correct_square_counter += 1;
                            square_21.fillColor = "#006400";
                        } else {
                            if (((mouse.clicked_name[0] === "square_6") && (random_square_names[recall_counter] === "square_6"))) {
                                corr_square_cliqued ++;
                                correct_square_counter += 1;
                                square_22.fillColor = "#006400";
                            } else {
                                if (((mouse.clicked_name[0] === "square_7") && (random_square_names[recall_counter] === "square_7"))) {
                                    corr_square_cliqued ++;
                                    correct_square_counter += 1;
                                    square_23.fillColor = "#006400";
                                } else {
                                    if (((mouse.clicked_name[0] === "square_8") && (random_square_names[recall_counter] === "square_8"))) {
                                        corr_square_cliqued ++;
                                        correct_square_counter += 1;
                                        square_24.fillColor = "#006400";
                                    } else {
                                        if (((mouse.clicked_name[0] === "square_9") && (random_square_names[recall_counter] === "square_9"))) {
                                            corr_square_cliqued ++;
                                            correct_square_counter += 1;
                                            square_25.fillColor = "#006400";
                                        } else {
                                            if (((mouse.clicked_name[0] === "square_10") && (random_square_names[recall_counter] === "square_10"))) {
                                                corr_square_cliqued ++;
                                                correct_square_counter += 1;
                                                square_26.fillColor = "#006400";
                                            } else {
                                                if (((mouse.clicked_name[0] === "square_11") && (random_square_names[recall_counter] === "square_11"))) {
                                                    corr_square_cliqued ++;
                                                    correct_square_counter += 1;
                                                    square_27.fillColor = "#006400";
                                                } else {
                                                    if (((mouse.clicked_name[0] === "square_12") && (random_square_names[recall_counter] === "square_12"))) {
                                                        corr_square_cliqued ++;
                                                        correct_square_counter += 1;
                                                        square_28.fillColor = "#006400";
                                                    } else {
                                                        if (((mouse.clicked_name[0] === "square_13") && (random_square_names[recall_counter] === "square_13"))) {
                                                            corr_square_cliqued ++;
                                                            correct_square_counter += 1;
                                                            square_29.fillColor = "#006400";
                                                        } else {
                                                            if (((mouse.clicked_name[0] === "square_14") && (random_square_names[recall_counter] === "square_14"))) {
                                                                corr_square_cliqued ++;
                                                                correct_square_counter += 1;
                                                                square_30.fillColor = "#006400";
                                                            } else {
                                                                if (((mouse.clicked_name[0] === "square_15") && (random_square_names[recall_counter] === "square_15"))) {
                                                                    corr_square_cliqued ++;
                                                                    correct_square_counter += 1;
                                                                    square_31.fillColor = "#006400";
                                                                } else {
                                                                    square_16.fillColor = "#ff0000";
                                                                    square_17.fillColor = "#ff0000";
                                                                    square_18.fillColor = "#ff0000";
                                                                    square_19.fillColor = "#ff0000";
                                                                    square_20.fillColor = "#ff0000";
                                                                    square_21.fillColor = "#ff0000";
                                                                    square_22.fillColor = "#ff0000";
                                                                    square_23.fillColor = "#ff0000";
                                                                    square_24.fillColor = "#ff0000";
                                                                    square_25.fillColor = "#ff0000";
                                                                    square_26.fillColor = "#ff0000";
                                                                    square_27.fillColor = "#ff0000";
                                                                    square_28.fillColor = "#ff0000";
                                                                    square_29.fillColor = "#ff0000";
                                                                    square_30.fillColor = "#ff0000";
                                                                    square_31.fillColor = "#ff0000";
                                                                    if (random_square_names[recall_counter] === "square_0") {
                                                                        square_16.fillColor = "#006400";
                                                                    } else {
                                                                        if (random_square_names[recall_counter] === "square_1") {
                                                                            square_17.fillColor = "#006400";
                                                                        } else {
                                                                            if (random_square_names[recall_counter] === "square_2") {
                                                                                square_18.fillColor = "#006400";
                                                                            } else {
                                                                                if (random_square_names[recall_counter] === "square_3") {
                                                                                    square_19.fillColor = "#006400";
                                                                                } else {
                                                                                    if (random_square_names[recall_counter] === "square_4") {
                                                                                        square_20.fillColor = "#006400";
                                                                                    } else {
                                                                                        if (random_square_names[recall_counter] === "square_5") {
                                                                                            square_21.fillColor = "#006400";
                                                                                        } else {
                                                                                            if (random_square_names[recall_counter] === "square_6") {
                                                                                                square_22.fillColor = "#006400";
                                                                                            } else {
                                                                                                if (random_square_names[recall_counter] === "square_7") {
                                                                                                    square_23.fillColor = "#006400";
                                                                                                } else {
                                                                                                    if (random_square_names[recall_counter] === "square_8") {
                                                                                                        square_24.fillColor = "#006400";
                                                                                                    } else {
                                                                                                        if (random_square_names[recall_counter] === "square_9") {
                                                                                                            square_25.fillColor = "#006400";
                                                                                                        } else {
                                                                                                            if (random_square_names[recall_counter] === "square_10") {
                                                                                                                square_26.fillColor = "#006400";
                                                                                                            } else {
                                                                                                                if (random_square_names[recall_counter] === "square_11") {
                                                                                                                    square_27.fillColor = "#006400";
                                                                                                                } else {
                                                                                                                    if (random_square_names[recall_counter] === "square_12") {
                                                                                                                        square_28.fillColor = "#006400";
                                                                                                                    } else {
                                                                                                                        if (random_square_names[recall_counter] === "square_13") {
                                                                                                                            square_29.fillColor = "#006400";
                                                                                                                        } else {
                                                                                                                            if (random_square_names[recall_counter] === "square_14") {
                                                                                                                                square_30.fillColor = "#006400";
                                                                                                                            } else {
                                                                                                                                if (random_square_names[recall_counter] === "square_15") {
                                                                                                                                    square_31.fillColor = "#006400";
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    // keep track of which components have finished
    square_rec_g_rComponents = [];
    square_rec_g_rComponents.push(text_10);
    square_rec_g_rComponents.push(grid3);
    square_rec_g_rComponents.push(square_16);
    square_rec_g_rComponents.push(square_17);
    square_rec_g_rComponents.push(square_18);
    square_rec_g_rComponents.push(square_19);
    square_rec_g_rComponents.push(square_20);
    square_rec_g_rComponents.push(square_21);
    square_rec_g_rComponents.push(square_22);
    square_rec_g_rComponents.push(square_23);
    square_rec_g_rComponents.push(square_24);
    square_rec_g_rComponents.push(square_25);
    square_rec_g_rComponents.push(square_26);
    square_rec_g_rComponents.push(square_27);
    square_rec_g_rComponents.push(square_28);
    square_rec_g_rComponents.push(square_29);
    square_rec_g_rComponents.push(square_30);
    square_rec_g_rComponents.push(square_31);
    
    for (const thisComponent of square_rec_g_rComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function square_rec_g_rRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'square_rec_g_r' ---
    // get current time
    t = square_rec_g_rClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
    }
    
    // *grid3* updates
    if (t >= 0 && grid3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid3.tStart = t;  // (not accounting for frame time here)
      grid3.frameNStart = frameN;  // exact frame index
      
      grid3.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid3.setAutoDraw(false);
    }
    
    // *square_16* updates
    if (t >= 0 && square_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_16.tStart = t;  // (not accounting for frame time here)
      square_16.frameNStart = frameN;  // exact frame index
      
      square_16.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_16.setAutoDraw(false);
    }
    
    // *square_17* updates
    if (t >= 0 && square_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_17.tStart = t;  // (not accounting for frame time here)
      square_17.frameNStart = frameN;  // exact frame index
      
      square_17.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_17.setAutoDraw(false);
    }
    
    // *square_18* updates
    if (t >= 0 && square_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_18.tStart = t;  // (not accounting for frame time here)
      square_18.frameNStart = frameN;  // exact frame index
      
      square_18.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_18.setAutoDraw(false);
    }
    
    // *square_19* updates
    if (t >= 0 && square_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_19.tStart = t;  // (not accounting for frame time here)
      square_19.frameNStart = frameN;  // exact frame index
      
      square_19.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_19.setAutoDraw(false);
    }
    
    // *square_20* updates
    if (t >= 0 && square_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_20.tStart = t;  // (not accounting for frame time here)
      square_20.frameNStart = frameN;  // exact frame index
      
      square_20.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_20.setAutoDraw(false);
    }
    
    // *square_21* updates
    if (t >= 0 && square_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_21.tStart = t;  // (not accounting for frame time here)
      square_21.frameNStart = frameN;  // exact frame index
      
      square_21.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_21.setAutoDraw(false);
    }
    
    // *square_22* updates
    if (t >= 0 && square_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_22.tStart = t;  // (not accounting for frame time here)
      square_22.frameNStart = frameN;  // exact frame index
      
      square_22.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_22.setAutoDraw(false);
    }
    
    // *square_23* updates
    if (t >= 0 && square_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_23.tStart = t;  // (not accounting for frame time here)
      square_23.frameNStart = frameN;  // exact frame index
      
      square_23.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_23.setAutoDraw(false);
    }
    
    // *square_24* updates
    if (t >= 0 && square_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_24.tStart = t;  // (not accounting for frame time here)
      square_24.frameNStart = frameN;  // exact frame index
      
      square_24.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_24.setAutoDraw(false);
    }
    
    // *square_25* updates
    if (t >= 0 && square_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_25.tStart = t;  // (not accounting for frame time here)
      square_25.frameNStart = frameN;  // exact frame index
      
      square_25.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_25.setAutoDraw(false);
    }
    
    // *square_26* updates
    if (t >= 0 && square_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_26.tStart = t;  // (not accounting for frame time here)
      square_26.frameNStart = frameN;  // exact frame index
      
      square_26.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_26.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_26.setAutoDraw(false);
    }
    
    // *square_27* updates
    if (t >= 0 && square_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_27.tStart = t;  // (not accounting for frame time here)
      square_27.frameNStart = frameN;  // exact frame index
      
      square_27.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_27.setAutoDraw(false);
    }
    
    // *square_28* updates
    if (t >= 0 && square_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_28.tStart = t;  // (not accounting for frame time here)
      square_28.frameNStart = frameN;  // exact frame index
      
      square_28.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_28.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_28.setAutoDraw(false);
    }
    
    // *square_29* updates
    if (t >= 0 && square_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_29.tStart = t;  // (not accounting for frame time here)
      square_29.frameNStart = frameN;  // exact frame index
      
      square_29.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_29.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_29.setAutoDraw(false);
    }
    
    // *square_30* updates
    if (t >= 0 && square_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_30.tStart = t;  // (not accounting for frame time here)
      square_30.frameNStart = frameN;  // exact frame index
      
      square_30.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_30.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_30.setAutoDraw(false);
    }
    
    // *square_31* updates
    if (t >= 0 && square_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_31.tStart = t;  // (not accounting for frame time here)
      square_31.frameNStart = frameN;  // exact frame index
      
      square_31.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_31.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_31.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of square_rec_g_rComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function square_rec_g_rRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'square_rec_g_r' ---
    for (const thisComponent of square_rec_g_rComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    square_16.fillColor = "#ff8080";
    square_17.fillColor = "#ff8080";
    square_18.fillColor = "#ff8080";
    square_19.fillColor = "#ff8080";
    square_20.fillColor = "#ff8080";
    square_21.fillColor = "#ff8080";
    square_22.fillColor = "#ff8080";
    square_23.fillColor = "#ff8080";
    square_24.fillColor = "#ff8080";
    square_25.fillColor = "#ff8080";
    square_26.fillColor = "#ff8080";
    square_27.fillColor = "#ff8080";
    square_28.fillColor = "#ff8080";
    square_29.fillColor = "#ff8080";
    square_30.fillColor = "#ff8080";
    square_31.fillColor = "#ff8080";
    
    square_16.borderColor = '#ffffff'
    square_17.borderColor = '#ffffff'
    square_18.borderColor = '#ffffff'
    square_19.borderColor = '#ffffff'
    square_20.borderColor = '#ffffff'
    square_21.borderColor = '#ffffff'
    square_22.borderColor = '#ffffff'
    square_23.borderColor = '#ffffff'
    square_24.borderColor = '#ffffff'
    square_25.borderColor = '#ffffff'
    square_26.borderColor = '#ffffff'
    square_27.borderColor = '#ffffff'
    square_28.borderColor = '#ffffff'
    square_29.borderColor = '#ffffff'
    square_30.borderColor = '#ffffff'
    square_31.borderColor = '#ffffff'
    
    
    recall_counter += 1;
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var result_squares_text;
var end_prac_text;
var _key_resp_13_allKeys;
var next_setComponents;
function next_setRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'next_set' ---
    t = 0;
    next_setClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_next_square_set
    result_squares_text = "Eredményed: " + correct_square_counter + " / " + thisloop_item_number;
    
    if (correct_square_counter === thisloop_item_number) {
    loop_breaker = 0;
    } else {
    loop_breaker++;
    }
    
    end_prac_text;
    if (counter <= 2) {
    end_prac_text = "Kattints, vagy nyomd meg a SPACE-t a következő gyakorlókörhöz!";
    } else if (counter === 3) {
    end_prac_text = "Szép! Most következzenek az éles körök!\n\nPróbálj meg minél magasabb szintre jutni!\n\nA folytatáshoz kattints, vagy nyomd meg a SPACE-t";
    } else {
    end_prac_text = "SPACE/Katt";
    }
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    gotValidClick = false; // until a click is received
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    next_setComponents = [];
    next_setComponents.push(text_result_squares);
    next_setComponents.push(text_end_prac);
    next_setComponents.push(mouse_2);
    next_setComponents.push(key_resp_13);
    
    for (const thisComponent of next_setComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function next_setRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'next_set' ---
    // get current time
    t = next_setClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_result_squares* updates
    if (t >= 0.0 && text_result_squares.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_result_squares.tStart = t;  // (not accounting for frame time here)
      text_result_squares.frameNStart = frameN;  // exact frame index
      
      text_result_squares.setAutoDraw(true);
    }

    
    if (text_result_squares.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_result_squares.setText(result_squares_text, false);
    }
    
    // *text_end_prac* updates
    if (t >= 0.0 && text_end_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_prac.tStart = t;  // (not accounting for frame time here)
      text_end_prac.frameNStart = frameN;  // exact frame index
      
      text_end_prac.setAutoDraw(true);
    }

    
    if (text_end_prac.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_end_prac.setText(end_prac_text, false);
    }
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of next_setComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function next_setRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'next_set' ---
    for (const thisComponent of next_setComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_next_square_set
    psychoJS.experiment.addData("number_of_correct_squares_clicked", correct_square_counter);
    psychoJS.experiment.addData("total_squares_clicked", thisloop_item_number);
    if ((loop_breaker === 3)) {
        trials_square_2.finished = true;
    }
    
    text_end_prac.setText("", true);
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_13.corr, level);
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "next_set" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var square_end_text;
var _key_resp_9_allKeys;
var ins_square_endComponents;
function ins_square_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins_square_end' ---
    t = 0;
    ins_square_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    square_end_text = "Szép eredmény!\nA legmagasabb szint, amelyre eljutottál: " + thisloop_item_number;
    
    // Setting all the important variables back to 0
    loop_breaker = 0;
    thisloop_item_number = 0;
    counter = 0;
    i = 0;
    recall_counter = 0;
    corr_square_cliqued = 0;
    random_square_names = [];
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ins_square_endComponents = [];
    ins_square_endComponents.push(text_square_end);
    ins_square_endComponents.push(text_18);
    ins_square_endComponents.push(key_resp_9);
    ins_square_endComponents.push(mouse_3);
    
    for (const thisComponent of ins_square_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ins_square_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins_square_end' ---
    // get current time
    t = ins_square_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_square_end* updates
    if (t >= 0.0 && text_square_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_square_end.tStart = t;  // (not accounting for frame time here)
      text_square_end.frameNStart = frameN;  // exact frame index
      
      text_square_end.setAutoDraw(true);
    }

    
    if (text_square_end.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_square_end.setText(square_end_text, false);
    }
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ins_square_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins_square_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins_square_end' ---
    for (const thisComponent of ins_square_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
    if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
    if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
    if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
    if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
    if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
    
    // the Routine "ins_square_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_20_allKeys;
var MW_questions1Components;
function MW_questions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MW_questions1' ---
    t = 0;
    MW_questions1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_6.reset()
    key_resp_20.keys = undefined;
    key_resp_20.rt = undefined;
    _key_resp_20_allKeys = [];
    // keep track of which components have finished
    MW_questions1Components = [];
    MW_questions1Components.push(text_27);
    MW_questions1Components.push(slider_6);
    MW_questions1Components.push(text_28);
    MW_questions1Components.push(key_resp_20);
    
    for (const thisComponent of MW_questions1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MW_questions1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MW_questions1' ---
    // get current time
    t = MW_questions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_27* updates
    if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }

    
    // *slider_6* updates
    if (t >= 0.0 && slider_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_6.tStart = t;  // (not accounting for frame time here)
      slider_6.frameNStart = frameN;  // exact frame index
      
      slider_6.setAutoDraw(true);
    }

    
    // *text_28* updates
    if ((slider_6.rating) && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
    }

    
    // *key_resp_20* updates
    if ((slider_6.rating) && key_resp_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_20.tStart = t;  // (not accounting for frame time here)
      key_resp_20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.clearEvents(); });
    }

    if (key_resp_20.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_20.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_20_allKeys = _key_resp_20_allKeys.concat(theseKeys);
      if (_key_resp_20_allKeys.length > 0) {
        key_resp_20.keys = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].name;  // just the last key pressed
        key_resp_20.rt = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MW_questions1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MW_questions1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MW_questions1' ---
    for (const thisComponent of MW_questions1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_6.response', slider_6.getRating());
    psychoJS.experiment.addData('slider_6.rt', slider_6.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_20.corr, level);
    }
    psychoJS.experiment.addData('key_resp_20.keys', key_resp_20.keys);
    if (typeof key_resp_20.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_20.rt', key_resp_20.rt);
        routineTimer.reset();
        }
    
    key_resp_20.stop();
    // the Routine "MW_questions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_21_allKeys;
var MW_questions2Components;
function MW_questions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MW_questions2' ---
    t = 0;
    MW_questions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_7.reset()
    key_resp_21.keys = undefined;
    key_resp_21.rt = undefined;
    _key_resp_21_allKeys = [];
    // keep track of which components have finished
    MW_questions2Components = [];
    MW_questions2Components.push(text_20);
    MW_questions2Components.push(slider_7);
    MW_questions2Components.push(text_29);
    MW_questions2Components.push(key_resp_21);
    
    for (const thisComponent of MW_questions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MW_questions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MW_questions2' ---
    // get current time
    t = MW_questions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }

    
    // *slider_7* updates
    if (t >= 0.0 && slider_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_7.tStart = t;  // (not accounting for frame time here)
      slider_7.frameNStart = frameN;  // exact frame index
      
      slider_7.setAutoDraw(true);
    }

    
    // *text_29* updates
    if ((slider_7.rating) && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }

    
    // *key_resp_21* updates
    if ((slider_7.rating) && key_resp_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_21.tStart = t;  // (not accounting for frame time here)
      key_resp_21.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_21.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.clearEvents(); });
    }

    if (key_resp_21.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_21.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_21_allKeys = _key_resp_21_allKeys.concat(theseKeys);
      if (_key_resp_21_allKeys.length > 0) {
        key_resp_21.keys = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].name;  // just the last key pressed
        key_resp_21.rt = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MW_questions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MW_questions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MW_questions2' ---
    for (const thisComponent of MW_questions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_7.response', slider_7.getRating());
    psychoJS.experiment.addData('slider_7.rt', slider_7.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_21.corr, level);
    }
    psychoJS.experiment.addData('key_resp_21.keys', key_resp_21.keys);
    if (typeof key_resp_21.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_21.rt', key_resp_21.rt);
        routineTimer.reset();
        }
    
    key_resp_21.stop();
    // the Routine "MW_questions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_22_allKeys;
var MW_questions3Components;
function MW_questions3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MW_questions3' ---
    t = 0;
    MW_questions3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_8.reset()
    key_resp_22.keys = undefined;
    key_resp_22.rt = undefined;
    _key_resp_22_allKeys = [];
    // keep track of which components have finished
    MW_questions3Components = [];
    MW_questions3Components.push(text_30);
    MW_questions3Components.push(slider_8);
    MW_questions3Components.push(text_31);
    MW_questions3Components.push(key_resp_22);
    
    for (const thisComponent of MW_questions3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MW_questions3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MW_questions3' ---
    // get current time
    t = MW_questions3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_30* updates
    if (t >= 0.0 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      
      text_30.setAutoDraw(true);
    }

    
    // *slider_8* updates
    if (t >= 0.0 && slider_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_8.tStart = t;  // (not accounting for frame time here)
      slider_8.frameNStart = frameN;  // exact frame index
      
      slider_8.setAutoDraw(true);
    }

    
    // *text_31* updates
    if ((slider_8.rating) && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }

    
    // *key_resp_22* updates
    if ((slider_8.rating) && key_resp_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_22.tStart = t;  // (not accounting for frame time here)
      key_resp_22.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_22.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.clearEvents(); });
    }

    if (key_resp_22.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_22.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_22_allKeys = _key_resp_22_allKeys.concat(theseKeys);
      if (_key_resp_22_allKeys.length > 0) {
        key_resp_22.keys = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].name;  // just the last key pressed
        key_resp_22.rt = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MW_questions3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MW_questions3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MW_questions3' ---
    for (const thisComponent of MW_questions3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_8.response', slider_8.getRating());
    psychoJS.experiment.addData('slider_8.rt', slider_8.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_22.corr, level);
    }
    psychoJS.experiment.addData('key_resp_22.keys', key_resp_22.keys);
    if (typeof key_resp_22.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_22.rt', key_resp_22.rt);
        routineTimer.reset();
        }
    
    key_resp_22.stop();
    // the Routine "MW_questions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_15_allKeys;
var next_partComponents;
function next_partRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'next_part' ---
    t = 0;
    next_partClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_11
    // current position of the mouse:
    mouse_11.x = [];
    mouse_11.y = [];
    mouse_11.leftButton = [];
    mouse_11.midButton = [];
    mouse_11.rightButton = [];
    mouse_11.time = [];
    gotValidClick = false; // until a click is received
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    next_partComponents = [];
    next_partComponents.push(text_19);
    next_partComponents.push(mouse_11);
    next_partComponents.push(key_resp_15);
    
    for (const thisComponent of next_partComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function next_partRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'next_part' ---
    // get current time
    t = next_partClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }

    // *mouse_11* updates
    if (t >= 0.0 && mouse_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_11.tStart = t;  // (not accounting for frame time here)
      mouse_11.frameNStart = frameN;  // exact frame index
      
      mouse_11.status = PsychoJS.Status.STARTED;
      mouse_11.mouseClock.reset();
      prevButtonState = mouse_11.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_11.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_11.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_11.getPos();
          mouse_11.x.push(_mouseXYs[0]);
          mouse_11.y.push(_mouseXYs[1]);
          mouse_11.leftButton.push(_mouseButtons[0]);
          mouse_11.midButton.push(_mouseButtons[1]);
          mouse_11.rightButton.push(_mouseButtons[2]);
          mouse_11.time.push(mouse_11.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *key_resp_15* updates
    if (t >= 0.0 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }

    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of next_partComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function next_partRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'next_part' ---
    for (const thisComponent of next_partComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_11.x) {  psychoJS.experiment.addData('mouse_11.x', mouse_11.x[0])};
    if (mouse_11.y) {  psychoJS.experiment.addData('mouse_11.y', mouse_11.y[0])};
    if (mouse_11.leftButton) {  psychoJS.experiment.addData('mouse_11.leftButton', mouse_11.leftButton[0])};
    if (mouse_11.midButton) {  psychoJS.experiment.addData('mouse_11.midButton', mouse_11.midButton[0])};
    if (mouse_11.rightButton) {  psychoJS.experiment.addData('mouse_11.rightButton', mouse_11.rightButton[0])};
    if (mouse_11.time) {  psychoJS.experiment.addData('mouse_11.time', mouse_11.time[0])};
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_15.corr, level);
    }
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
        routineTimer.reset();
        }
    
    key_resp_15.stop();
    // the Routine "next_part" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var ins_sym_1Components;
function ins_sym_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins_sym_1' ---
    t = 0;
    ins_sym_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // setup some python lists for storing info about the mouse_6
    // current position of the mouse:
    mouse_6.x = [];
    mouse_6.y = [];
    mouse_6.leftButton = [];
    mouse_6.midButton = [];
    mouse_6.rightButton = [];
    mouse_6.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ins_sym_1Components = [];
    ins_sym_1Components.push(text_2);
    ins_sym_1Components.push(key_resp_2);
    ins_sym_1Components.push(mouse_6);
    
    for (const thisComponent of ins_sym_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ins_sym_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins_sym_1' ---
    // get current time
    t = ins_sym_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_6.getPos();
          mouse_6.x.push(_mouseXYs[0]);
          mouse_6.y.push(_mouseXYs[1]);
          mouse_6.leftButton.push(_mouseButtons[0]);
          mouse_6.midButton.push(_mouseButtons[1]);
          mouse_6.rightButton.push(_mouseButtons[2]);
          mouse_6.time.push(mouse_6.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ins_sym_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins_sym_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins_sym_1' ---
    for (const thisComponent of ins_sym_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_6.x) {  psychoJS.experiment.addData('mouse_6.x', mouse_6.x[0])};
    if (mouse_6.y) {  psychoJS.experiment.addData('mouse_6.y', mouse_6.y[0])};
    if (mouse_6.leftButton) {  psychoJS.experiment.addData('mouse_6.leftButton', mouse_6.leftButton[0])};
    if (mouse_6.midButton) {  psychoJS.experiment.addData('mouse_6.midButton', mouse_6.midButton[0])};
    if (mouse_6.rightButton) {  psychoJS.experiment.addData('mouse_6.rightButton', mouse_6.rightButton[0])};
    if (mouse_6.time) {  psychoJS.experiment.addData('mouse_6.time', mouse_6.time[0])};
    
    // the Routine "ins_sym_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var ins_sym_2Components;
function ins_sym_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins_sym_2' ---
    t = 0;
    ins_sym_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_sym.setImage('resources/example1.JPG');
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    ins_sym_2Components = [];
    ins_sym_2Components.push(text_3);
    ins_sym_2Components.push(image_sym);
    ins_sym_2Components.push(text_sym_nsym);
    ins_sym_2Components.push(key_resp_3);
    
    for (const thisComponent of ins_sym_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ins_sym_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins_sym_2' ---
    // get current time
    t = ins_sym_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *image_sym* updates
    if (t >= 0.0 && image_sym.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_sym.tStart = t;  // (not accounting for frame time here)
      image_sym.frameNStart = frameN;  // exact frame index
      
      image_sym.setAutoDraw(true);
    }

    
    // *text_sym_nsym* updates
    if (t >= 0.0 && text_sym_nsym.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sym_nsym.tStart = t;  // (not accounting for frame time here)
      text_sym_nsym.frameNStart = frameN;  // exact frame index
      
      text_sym_nsym.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['right'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ins_sym_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins_sym_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins_sym_2' ---
    for (const thisComponent of ins_sym_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "ins_sym_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var ins_sym_3Components;
function ins_sym_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins_sym_3' ---
    t = 0;
    ins_sym_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image.setImage('resources/example2.JPG');
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    ins_sym_3Components = [];
    ins_sym_3Components.push(text_4);
    ins_sym_3Components.push(image);
    ins_sym_3Components.push(text_sym_nsym_2);
    ins_sym_3Components.push(key_resp_4);
    
    for (const thisComponent of ins_sym_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ins_sym_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins_sym_3' ---
    // get current time
    t = ins_sym_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *text_sym_nsym_2* updates
    if (t >= 0.0 && text_sym_nsym_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sym_nsym_2.tStart = t;  // (not accounting for frame time here)
      text_sym_nsym_2.frameNStart = frameN;  // exact frame index
      
      text_sym_nsym_2.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['left'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ins_sym_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins_sym_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins_sym_3' ---
    for (const thisComponent of ins_sym_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "ins_sym_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var ins2Components;
function ins2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins2' ---
    t = 0;
    ins2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // setup some python lists for storing info about the mouse_10
    // current position of the mouse:
    mouse_10.x = [];
    mouse_10.y = [];
    mouse_10.leftButton = [];
    mouse_10.midButton = [];
    mouse_10.rightButton = [];
    mouse_10.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ins2Components = [];
    ins2Components.push(text_5);
    ins2Components.push(key_resp_5);
    ins2Components.push(mouse_10);
    
    for (const thisComponent of ins2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ins2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins2' ---
    // get current time
    t = ins2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_10* updates
    if (t >= 0.0 && mouse_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_10.tStart = t;  // (not accounting for frame time here)
      mouse_10.frameNStart = frameN;  // exact frame index
      
      mouse_10.status = PsychoJS.Status.STARTED;
      mouse_10.mouseClock.reset();
      prevButtonState = mouse_10.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_10.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_10.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_10.getPos();
          mouse_10.x.push(_mouseXYs[0]);
          mouse_10.y.push(_mouseXYs[1]);
          mouse_10.leftButton.push(_mouseButtons[0]);
          mouse_10.midButton.push(_mouseButtons[1]);
          mouse_10.rightButton.push(_mouseButtons[2]);
          mouse_10.time.push(mouse_10.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ins2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins2' ---
    for (const thisComponent of ins2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_10.x) {  psychoJS.experiment.addData('mouse_10.x', mouse_10.x[0])};
    if (mouse_10.y) {  psychoJS.experiment.addData('mouse_10.y', mouse_10.y[0])};
    if (mouse_10.leftButton) {  psychoJS.experiment.addData('mouse_10.leftButton', mouse_10.leftButton[0])};
    if (mouse_10.midButton) {  psychoJS.experiment.addData('mouse_10.midButton', mouse_10.midButton[0])};
    if (mouse_10.rightButton) {  psychoJS.experiment.addData('mouse_10.rightButton', mouse_10.rightButton[0])};
    if (mouse_10.time) {  psychoJS.experiment.addData('mouse_10.time', mouse_10.time[0])};
    
    // the Routine "ins2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_sym_helperComponents;
function prac_sym_helperRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_sym_helper' ---
    t = 0;
    prac_sym_helperClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
    }
    
    //creating function that chooses x amount of sym and nsym images
    function select_images(non_sym_images, sym_images, pracSymmTrialNumber) {
    if (pracSymmTrialNumber % 2 === 0) {
    const half_trials = Math.floor(pracSymmTrialNumber / 2);
    // Select random samples from sym and nsym images
    let selected_non_sym_images = shuffle(non_sym_images);
        selected_non_sym_images = selected_non_sym_images.slice(0, half_trials);
    let selected_sym_images = shuffle(sym_images);
        selected_sym_images = selected_sym_images.slice(0, half_trials);
    selected_images = selected_non_sym_images.concat(selected_sym_images);
    selected_images.sort(() => Math.random() - 0.5); }
     else {
    const half_trials = Math.floor((pracSymmTrialNumber + 1) / 2);
    //same here
    let selected_non_sym_images = shuffle(non_sym_images);
        selected_non_sym_images = selected_non_sym_images.slice(0, half_trials);
    let selected_sym_images = shuffle(sym_images);
        selected_sym_images = selected_sym_images.slice(0, half_trials);
    //but we delete one
    selected_images = selected_non_sym_images.concat(selected_sym_images);
    selected_images.sort(() => Math.random() - 0.5);
    selected_images.pop();
    }
    return selected_images;
    }
    
    total_trials = 0;
    selected_images = select_images(non_sym_images, sym_images, pracSymmTrialNumber);
    
    
    // keep track of which components have finished
    prac_sym_helperComponents = [];
    
    for (const thisComponent of prac_sym_helperComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_sym_helperRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_sym_helper' ---
    // get current time
    t = prac_sym_helperClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_sym_helperComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_sym_helperRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_sym_helper' ---
    for (const thisComponent of prac_sym_helperComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "prac_sym_helper" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var prac_symComponents;
function prac_symRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_sym' ---
    t = 0;
    prac_symClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_prac_sym
    timerPracSym.reset();
    
    picture = selected_images[total_trials];
    
    image_2.setImage(picture);
    image_3.setImage(picture);
    
    document.body.style.cursor='none';
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    prac_symComponents = [];
    prac_symComponents.push(fixation);
    prac_symComponents.push(image_2);
    prac_symComponents.push(text_sym_nsym_3);
    prac_symComponents.push(text_countdown);
    prac_symComponents.push(text_how_many_correct);
    prac_symComponents.push(key_resp_6);
    
    for (const thisComponent of prac_symComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_symRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_sym' ---
    // get current time
    t = prac_symClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_prac_sym
     
     if (routineTimer.getTime() > 2.0000) {
     image_2.opacity = 0;
    } else {
     image_2.opacity = 1;
    }
    
    countDownText = (Math.round(timerPracSym.getTime() * 10) / 10).toFixed(1);
    
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *image_2* updates
    if (t >= 0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    if (image_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_2.setImage(picture, false);
    }
    
    // *text_sym_nsym_3* updates
    if (t >= 0.5 && text_sym_nsym_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sym_nsym_3.tStart = t;  // (not accounting for frame time here)
      text_sym_nsym_3.frameNStart = frameN;  // exact frame index
      
      text_sym_nsym_3.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_sym_nsym_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_sym_nsym_3.setAutoDraw(false);
    }
    
    // *text_countdown* updates
    if (t >= 0.5 && text_countdown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_countdown.tStart = t;  // (not accounting for frame time here)
      text_countdown.frameNStart = frameN;  // exact frame index
      
      text_countdown.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_countdown.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_countdown.setAutoDraw(false);
    }
    
    if (text_countdown.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_countdown.setText(countDownText, false);
    }
    
    // *text_how_many_correct* updates
    if (t >= 0.5 && text_how_many_correct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_how_many_correct.tStart = t;  // (not accounting for frame time here)
      text_how_many_correct.frameNStart = frameN;  // exact frame index
      
      text_how_many_correct.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_how_many_correct.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_how_many_correct.setAutoDraw(false);
    }
    
    if (text_how_many_correct.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_how_many_correct.setText(correct_total_text, false);
    }
    
    // *key_resp_6* updates
    if (t >= 0.5 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_6.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_symComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var remainingTime;
var sym_corr;
function prac_symRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_sym' ---
    for (const thisComponent of prac_symComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_prac_sym
    
    
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    countDownText = "";
    remainingTime = timerPracSym.getTime();
    sym_corr = "";
    if (_pj.in_es6(selected_images[total_trials], sym_images)) {
        sym_corr = "right";
    } else {
        sym_corr = "left";
    }
    if ((remainingTime <= 0)) {
        correct_answers += 0;
        maskColor = redMask;
    } else {
        if ((key_resp_6.keys === sym_corr)) {
            correct_answers += 1;
            maskColor = greenMask;
        } else {
            correct_answers += 0;
            maskColor = redMask;
        }
    }
    image_4.setImage(maskColor);
    total_trials += 1;
    correct_total_text = `Helyes válaszok: ${correct_answers} / ${total_trials}`;
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_sym_g_rComponents;
function prac_sym_g_rRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_sym_g_r' ---
    t = 0;
    prac_sym_g_rClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    prac_sym_g_rComponents = [];
    prac_sym_g_rComponents.push(image_3);
    prac_sym_g_rComponents.push(image_4);
    
    for (const thisComponent of prac_sym_g_rComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_sym_g_rRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_sym_g_r' ---
    // get current time
    t = prac_sym_g_rClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_3* updates
    if (t >= 0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
    }
    
    if (image_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_3.setImage(picture, false);
    }
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
    }
    
    if (image_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_4.setImage(maskColor, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_sym_g_rComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_sym_g_rRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_sym_g_r' ---
    for (const thisComponent of prac_sym_g_rComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_prac_sym_g_r
    psychoJS.experiment.addData("SymmAnswer", sym_corr);
    maskColor = "";
    
    picture = ""
    
    document.body.style.cursor='auto';
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_7_allKeys;
var prac_sym_fbComponents;
function prac_sym_fbRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_sym_fb' ---
    t = 0;
    prac_sym_fbClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_prac_sym_fb
    if ((total_trials === 0)) {
        accuracyPercent = 0;
    } else {
        accuracyPercent = ((correct_answers / total_trials) * 100);
    }
    if ((accuracyPercent >= 85)) {
        text_score.color = "#006400";
    } else {
        text_score.color = "#800000";
    }
    accuracyText = (`${accuracyPercent}` + "%");
    if ((prac_sym_loop_nr <= 1)) {
        prac_fb = "A k\u00eds\u00e9rlet sikeres teljes\u00edt\u00e9s\u00e9hez majd legal\u00e1bb 85%-ot kell el\u00e9rned!\n\nHa \u00fajra k\u00edv\u00e1nsz gyakorolni, nyomd meg a BAL vagy a JOBB gombot. \u00d6sszesen háromszor gyakorolhatod ezt a feladatr\u00e9szt.\n\nHa nincs szükséged további a gyakorlásra és a következő részre ugranál, nyomd meg a SPACE billentyűt";
    } else {
        prac_fb = "A k\u00eds\u00e9rlet sikeres teljes\u00edt\u00e9s\u00e9hez majd legal\u00e1bb 85%-ot kell el\u00e9rned!\n\n Elfogytak a gyakorl\u00e1si lehet\u0151s\u00e9geid\nTov\u00e1bb: SPACE";
    }
    
    text_score.setText(accuracyText);
    text_7.setText(prac_fb);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    prac_sym_fbComponents = [];
    prac_sym_fbComponents.push(text_6);
    prac_sym_fbComponents.push(text_score);
    prac_sym_fbComponents.push(text_7);
    prac_sym_fbComponents.push(key_resp_7);
    
    for (const thisComponent of prac_sym_fbComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_sym_fbRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_sym_fb' ---
    // get current time
    t = prac_sym_fbClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *text_score* updates
    if (t >= 0.0 && text_score.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_score.tStart = t;  // (not accounting for frame time here)
      text_score.frameNStart = frameN;  // exact frame index
      
      text_score.setAutoDraw(true);
    }

    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_sym_fbComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_sym_fbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_sym_fb' ---
    for (const thisComponent of prac_sym_fbComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_prac_sym_fb
    prac_sym_loop_nr += 1;
    total_trials = 0;
    correct_answers = 0;
    accuracyText = "";
    correct_total_text = "";
    if ((key_resp_7.keys === "space")) {
        trials_prac2.finished = true;
    }
    
    text_how_many_correct.setText("", true)
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "prac_sym_fb" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_10_allKeys;
var ins_bothComponents;
function ins_bothRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins_both' ---
    t = 0;
    ins_bothClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // setup some python lists for storing info about the mouse_9
    // current position of the mouse:
    mouse_9.x = [];
    mouse_9.y = [];
    mouse_9.leftButton = [];
    mouse_9.midButton = [];
    mouse_9.rightButton = [];
    mouse_9.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ins_bothComponents = [];
    ins_bothComponents.push(text_12);
    ins_bothComponents.push(key_resp_10);
    ins_bothComponents.push(mouse_9);
    
    for (const thisComponent of ins_bothComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ins_bothRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins_both' ---
    // get current time
    t = ins_bothClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_9* updates
    if (t >= 0.0 && mouse_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_9.tStart = t;  // (not accounting for frame time here)
      mouse_9.frameNStart = frameN;  // exact frame index
      
      mouse_9.status = PsychoJS.Status.STARTED;
      mouse_9.mouseClock.reset();
      prevButtonState = mouse_9.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_9.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_9.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_9.getPos();
          mouse_9.x.push(_mouseXYs[0]);
          mouse_9.y.push(_mouseXYs[1]);
          mouse_9.leftButton.push(_mouseButtons[0]);
          mouse_9.midButton.push(_mouseButtons[1]);
          mouse_9.rightButton.push(_mouseButtons[2]);
          mouse_9.time.push(mouse_9.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ins_bothComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins_bothRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins_both' ---
    for (const thisComponent of ins_bothComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_9.x) {  psychoJS.experiment.addData('mouse_9.x', mouse_9.x[0])};
    if (mouse_9.y) {  psychoJS.experiment.addData('mouse_9.y', mouse_9.y[0])};
    if (mouse_9.leftButton) {  psychoJS.experiment.addData('mouse_9.leftButton', mouse_9.leftButton[0])};
    if (mouse_9.midButton) {  psychoJS.experiment.addData('mouse_9.midButton', mouse_9.midButton[0])};
    if (mouse_9.rightButton) {  psychoJS.experiment.addData('mouse_9.rightButton', mouse_9.rightButton[0])};
    if (mouse_9.time) {  psychoJS.experiment.addData('mouse_9.time', mouse_9.time[0])};
    
    // the Routine "ins_both" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var both_helperComponents;
function both_helperRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'both_helper' ---
    t = 0;
    both_helperClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_both_helper
    thisloop_item_number = prac_loop_lengths[counter];
    
    random_square_names = shuffle(square_names_both).slice(0, thisloop_item_number);
    
    i = 0;
    recall_counter = 0;
    corr_square_cliqued = 0;
    correct_square_counter = 0;
    
    total_trials = 0;
    
    
    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
    }
    
    
    //creating function that chooses x amount of sym and nsym images
    function select_images_both(non_sym_images, sym_images, pracSymmTrialNumber) {
    if (pracSymmTrialNumber % 2 === 0) {
    const half_trials = Math.floor(pracSymmTrialNumber / 2);
    // Select random samples from sym and nsym images
    let selected_non_sym_images = shuffle(non_sym_images);
        selected_non_sym_images = selected_non_sym_images.slice(0, half_trials);
    let selected_sym_images = shuffle(sym_images);
        selected_sym_images = selected_sym_images.slice(0, half_trials);
    selected_images_both = selected_non_sym_images.concat(selected_sym_images);
    selected_images_both.sort(() => Math.random() - 0.5); }
     else {
    const half_trials = Math.floor((pracSymmTrialNumber + 1) / 2);
    //same here
    let selected_non_sym_images = shuffle(non_sym_images);
        selected_non_sym_images = selected_non_sym_images.slice(0, half_trials);
    let selected_sym_images = shuffle(sym_images);
        selected_sym_images = selected_sym_images.slice(0, half_trials);
    //but we delete one
    selected_images_both = selected_non_sym_images.concat(selected_sym_images);
    selected_images_both.sort(() => Math.random() - 0.5);
    selected_images_both.pop();
    }
    return selected_images_both;
    }
    
    selected_images_both = select_images_both(non_sym_images, sym_images, thisloop_item_number);
    
    
    
    
    
    
    
    
    
    // keep track of which components have finished
    both_helperComponents = [];
    
    for (const thisComponent of both_helperComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function both_helperRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'both_helper' ---
    // get current time
    t = both_helperClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of both_helperComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function both_helperRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'both_helper' ---
    for (const thisComponent of both_helperComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_both_helper
    counter += 1;
    
    // the Routine "both_helper" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var both_levelComponents;
function both_levelRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'both_level' ---
    t = 0;
    both_levelClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    document.body.style.cursor='none';
    // keep track of which components have finished
    both_levelComponents = [];
    both_levelComponents.push(text_both_level_1);
    both_levelComponents.push(text_both_level_2);
    
    for (const thisComponent of both_levelComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function both_levelRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'both_level' ---
    // get current time
    t = both_levelClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_both_level_1* updates
    if (t >= 0.0 && text_both_level_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_both_level_1.tStart = t;  // (not accounting for frame time here)
      text_both_level_1.frameNStart = frameN;  // exact frame index
      
      text_both_level_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_both_level_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_both_level_1.setAutoDraw(false);
    }
    
    // *text_both_level_2* updates
    if (t >= 0.0 && text_both_level_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_both_level_2.tStart = t;  // (not accounting for frame time here)
      text_both_level_2.frameNStart = frameN;  // exact frame index
      
      text_both_level_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_both_level_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_both_level_2.setAutoDraw(false);
    }
    
    if (text_both_level_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_both_level_2.setText(thisloop_item_number, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of both_levelComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function both_levelRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'both_level' ---
    for (const thisComponent of both_levelComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var both_squareComponents;
function both_squareRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'both_square' ---
    t = 0;
    both_squareClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.150000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_both_square
    square_name_show = random_square_names[i];
    coordinates = square_dict_both[square_name_show];
    square_rand_both.setPos(coordinates);
    
    document.body.style.cursor='none';
    // keep track of which components have finished
    both_squareComponents = [];
    both_squareComponents.push(fixation_both);
    both_squareComponents.push(grid_both);
    both_squareComponents.push(square_rand_both);
    
    for (const thisComponent of both_squareComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function both_squareRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'both_square' ---
    // get current time
    t = both_squareClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_both* updates
    if (t >= 0 && fixation_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_both.tStart = t;  // (not accounting for frame time here)
      fixation_both.frameNStart = frameN;  // exact frame index
      
      fixation_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_both.setAutoDraw(false);
    }
    
    // *grid_both* updates
    if (t >= 0 && grid_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_both.tStart = t;  // (not accounting for frame time here)
      grid_both.frameNStart = frameN;  // exact frame index
      
      grid_both.setAutoDraw(true);
    }

    frameRemains = 0 + 1.15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid_both.setAutoDraw(false);
    }
    
    // *square_rand_both* updates
    if (t >= 0.5 && square_rand_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_rand_both.tStart = t;  // (not accounting for frame time here)
      square_rand_both.frameNStart = frameN;  // exact frame index
      
      square_rand_both.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.65 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_rand_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_rand_both.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of both_squareComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function both_squareRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'both_square' ---
    for (const thisComponent of both_squareComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_both_square
    i += 1;
    psychoJS.experiment.addData("squareShown", square_name_show);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_both_allKeys;
var both_symComponents;
function both_symRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'both_sym' ---
    t = 0;
    both_symClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_prac_sym_both
    timerPracSym.reset();
    
    picture = selected_images_both[total_trials];
    
    image_2_both.setImage(picture);
    image_3_both.setImage(picture);
    key_resp_6_both.keys = undefined;
    key_resp_6_both.rt = undefined;
    _key_resp_6_both_allKeys = [];
    // keep track of which components have finished
    both_symComponents = [];
    both_symComponents.push(fixation_both_2);
    both_symComponents.push(image_2_both);
    both_symComponents.push(text_sym_nsym_3_both);
    both_symComponents.push(text_countdown_both);
    both_symComponents.push(text_how_many_correct_both);
    both_symComponents.push(key_resp_6_both);
    
    for (const thisComponent of both_symComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function both_symRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'both_sym' ---
    // get current time
    t = both_symClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_prac_sym_both
     if (routineTimer.getTime() > 2.0000) {
     image_2_both.opacity = 0;
    } else {
     image_2_both.opacity = 1;
    }
    
    countDownText = (Math.round(timerPracSym.getTime() * 10) / 10).toFixed(1);
    
    // *fixation_both_2* updates
    if (t >= 0.0 && fixation_both_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_both_2.tStart = t;  // (not accounting for frame time here)
      fixation_both_2.frameNStart = frameN;  // exact frame index
      
      fixation_both_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_both_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_both_2.setAutoDraw(false);
    }
    
    // *image_2_both* updates
    if (t >= 0 && image_2_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2_both.tStart = t;  // (not accounting for frame time here)
      image_2_both.frameNStart = frameN;  // exact frame index
      
      image_2_both.setAutoDraw(true);
    }

    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2_both.setAutoDraw(false);
    }
    
    if (image_2_both.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_2_both.setImage(picture, false);
    }
    
    // *text_sym_nsym_3_both* updates
    if (t >= 0.5 && text_sym_nsym_3_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sym_nsym_3_both.tStart = t;  // (not accounting for frame time here)
      text_sym_nsym_3_both.frameNStart = frameN;  // exact frame index
      
      text_sym_nsym_3_both.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_sym_nsym_3_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_sym_nsym_3_both.setAutoDraw(false);
    }
    
    // *text_countdown_both* updates
    if (t >= 0.5 && text_countdown_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_countdown_both.tStart = t;  // (not accounting for frame time here)
      text_countdown_both.frameNStart = frameN;  // exact frame index
      
      text_countdown_both.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_countdown_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_countdown_both.setAutoDraw(false);
    }
    
    if (text_countdown_both.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_countdown_both.setText(countDownText, false);
    }
    
    // *text_how_many_correct_both* updates
    if (t >= 0.5 && text_how_many_correct_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_how_many_correct_both.tStart = t;  // (not accounting for frame time here)
      text_how_many_correct_both.frameNStart = frameN;  // exact frame index
      
      text_how_many_correct_both.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_how_many_correct_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_how_many_correct_both.setAutoDraw(false);
    }
    
    if (text_how_many_correct_both.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_how_many_correct_both.setText(correct_total_text, false);
    }
    
    // *key_resp_6_both* updates
    if (t >= 0.5 && key_resp_6_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6_both.tStart = t;  // (not accounting for frame time here)
      key_resp_6_both.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6_both.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6_both.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6_both.clearEvents(); });
    }

    frameRemains = 0.5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_6_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_6_both.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_6_both.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6_both.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_6_both_allKeys = _key_resp_6_both_allKeys.concat(theseKeys);
      if (_key_resp_6_both_allKeys.length > 0) {
        key_resp_6_both.keys = _key_resp_6_both_allKeys[_key_resp_6_both_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6_both.rt = _key_resp_6_both_allKeys[_key_resp_6_both_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of both_symComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var symCorrectText;
function both_symRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'both_sym' ---
    for (const thisComponent of both_symComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_prac_sym_both
    
    
    
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    countDownText = "";
    remainingTime = timerPracSym.getTime();
    sym_corr = "";
    if (_pj.in_es6(selected_images_both[total_trials], sym_images)) {
        sym_corr = "right";
    } else {
        sym_corr = "left";
    }
    if ((remainingTime <= 0)) {
        correct_answers += 0;
        maskColor = "";
        symCorrectText = "HELYTELEN"
    } else {
        if ((key_resp_6_both.keys === sym_corr)) {
            correct_answers += 1;
            overall_symm_corr += 1
            maskColor = "";
            symCorrectText = "HELYES"
        } else {
            correct_answers += 0;
            maskColor = "";
            symCorrectText = "HELYTELEN"
        }
    }
    //image_4_both.setImage(maskColor);
    total_trials += 1;
    overall_symm += 1;
    correct_total_text = `Helyes válaszok: ${correct_answers} / ${total_trials}`;
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6_both.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6_both.keys', key_resp_6_both.keys);
    if (typeof key_resp_6_both.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6_both.rt', key_resp_6_both.rt);
        routineTimer.reset();
        }
    
    key_resp_6_both.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var both_sym_g_rComponents;
function both_sym_g_rRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'both_sym_g_r' ---
    t = 0;
    both_sym_g_rClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    text_corr_sym_or_not.setText(symCorrectText);
    // keep track of which components have finished
    both_sym_g_rComponents = [];
    both_sym_g_rComponents.push(image_3_both);
    both_sym_g_rComponents.push(text_corr_sym_or_not);
    
    for (const thisComponent of both_sym_g_rComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function both_sym_g_rRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'both_sym_g_r' ---
    // get current time
    t = both_sym_g_rClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_3_both* updates
    if (t >= 0 && image_3_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3_both.tStart = t;  // (not accounting for frame time here)
      image_3_both.frameNStart = frameN;  // exact frame index
      
      image_3_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3_both.setAutoDraw(false);
    }
    
    if (image_3_both.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_3_both.setImage(picture, false);
    }
    
    // *text_corr_sym_or_not* updates
    if (t >= 0 && text_corr_sym_or_not.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_corr_sym_or_not.tStart = t;  // (not accounting for frame time here)
      text_corr_sym_or_not.frameNStart = frameN;  // exact frame index
      
      text_corr_sym_or_not.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_corr_sym_or_not.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_corr_sym_or_not.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of both_sym_g_rComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var $symCorrectText;
function both_sym_g_rRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'both_sym_g_r' ---
    for (const thisComponent of both_sym_g_rComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_prac_sym_g_r_both
    psychoJS.experiment.addData("SymmAnswer", sym_corr);
    maskColor = "";
    $symCorrectText = "";
    
    document.body.style.cursor='auto';
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var both_square_recComponents;
function both_square_recRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'both_square_rec' ---
    t = 0;
    both_square_recClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_both
    // current position of the mouse:
    mouse_both.x = [];
    mouse_both.y = [];
    mouse_both.leftButton = [];
    mouse_both.midButton = [];
    mouse_both.rightButton = [];
    mouse_both.time = [];
    mouse_both.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    both_square_recComponents = [];
    both_square_recComponents.push(text9_both);
    both_square_recComponents.push(grid2_both);
    both_square_recComponents.push(mouse_both);
    both_square_recComponents.push(square_0_both);
    both_square_recComponents.push(square_1_both);
    both_square_recComponents.push(square_2_both);
    both_square_recComponents.push(square_3_both);
    both_square_recComponents.push(square_4_both);
    both_square_recComponents.push(square_5_both);
    both_square_recComponents.push(square_6_both);
    both_square_recComponents.push(square_7_both);
    both_square_recComponents.push(square_8_both);
    both_square_recComponents.push(square_9_both);
    both_square_recComponents.push(square_10_both);
    both_square_recComponents.push(square_11_both);
    both_square_recComponents.push(square_12_both);
    both_square_recComponents.push(square_13_both);
    both_square_recComponents.push(square_14_both);
    both_square_recComponents.push(square_15_both);
    
    for (const thisComponent of both_square_recComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function both_square_recRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'both_square_rec' ---
    // get current time
    t = both_square_recClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text9_both* updates
    if (t >= 0 && text9_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text9_both.tStart = t;  // (not accounting for frame time here)
      text9_both.frameNStart = frameN;  // exact frame index
      
      text9_both.setAutoDraw(true);
    }

    
    // *grid2_both* updates
    if (t >= 0 && grid2_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid2_both.tStart = t;  // (not accounting for frame time here)
      grid2_both.frameNStart = frameN;  // exact frame index
      
      grid2_both.setAutoDraw(true);
    }

    // *mouse_both* updates
    if (t >= 0 && mouse_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_both.tStart = t;  // (not accounting for frame time here)
      mouse_both.frameNStart = frameN;  // exact frame index
      
      mouse_both.status = PsychoJS.Status.STARTED;
      mouse_both.mouseClock.reset();
      prevButtonState = mouse_both.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_both.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_both.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [square_0_both, square_1_both, square_2_both, square_3_both, square_4_both, square_5_both, square_6_both, square_7_both, square_8_both, square_9_both, square_10_both, square_11_both, square_12_both, square_13_both, square_14_both, square_15_both]) {
            if (obj.contains(mouse_both)) {
              gotValidClick = true;
              mouse_both.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_both.getPos();
          mouse_both.x.push(_mouseXYs[0]);
          mouse_both.y.push(_mouseXYs[1]);
          mouse_both.leftButton.push(_mouseButtons[0]);
          mouse_both.midButton.push(_mouseButtons[1]);
          mouse_both.rightButton.push(_mouseButtons[2]);
          mouse_both.time.push(mouse_both.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *square_0_both* updates
    if (t >= 0 && square_0_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_0_both.tStart = t;  // (not accounting for frame time here)
      square_0_both.frameNStart = frameN;  // exact frame index
      
      square_0_both.setAutoDraw(true);
    }

    
    // *square_1_both* updates
    if (t >= 0 && square_1_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_1_both.tStart = t;  // (not accounting for frame time here)
      square_1_both.frameNStart = frameN;  // exact frame index
      
      square_1_both.setAutoDraw(true);
    }

    
    // *square_2_both* updates
    if (t >= 0 && square_2_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_2_both.tStart = t;  // (not accounting for frame time here)
      square_2_both.frameNStart = frameN;  // exact frame index
      
      square_2_both.setAutoDraw(true);
    }

    
    // *square_3_both* updates
    if (t >= 0 && square_3_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_3_both.tStart = t;  // (not accounting for frame time here)
      square_3_both.frameNStart = frameN;  // exact frame index
      
      square_3_both.setAutoDraw(true);
    }

    
    // *square_4_both* updates
    if (t >= 0 && square_4_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_4_both.tStart = t;  // (not accounting for frame time here)
      square_4_both.frameNStart = frameN;  // exact frame index
      
      square_4_both.setAutoDraw(true);
    }

    
    // *square_5_both* updates
    if (t >= 0 && square_5_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_5_both.tStart = t;  // (not accounting for frame time here)
      square_5_both.frameNStart = frameN;  // exact frame index
      
      square_5_both.setAutoDraw(true);
    }

    
    // *square_6_both* updates
    if (t >= 0 && square_6_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_6_both.tStart = t;  // (not accounting for frame time here)
      square_6_both.frameNStart = frameN;  // exact frame index
      
      square_6_both.setAutoDraw(true);
    }

    
    // *square_7_both* updates
    if (t >= 0 && square_7_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_7_both.tStart = t;  // (not accounting for frame time here)
      square_7_both.frameNStart = frameN;  // exact frame index
      
      square_7_both.setAutoDraw(true);
    }

    
    // *square_8_both* updates
    if (t >= 0 && square_8_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_8_both.tStart = t;  // (not accounting for frame time here)
      square_8_both.frameNStart = frameN;  // exact frame index
      
      square_8_both.setAutoDraw(true);
    }

    
    // *square_9_both* updates
    if (t >= 0 && square_9_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_9_both.tStart = t;  // (not accounting for frame time here)
      square_9_both.frameNStart = frameN;  // exact frame index
      
      square_9_both.setAutoDraw(true);
    }

    
    // *square_10_both* updates
    if (t >= 0 && square_10_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_10_both.tStart = t;  // (not accounting for frame time here)
      square_10_both.frameNStart = frameN;  // exact frame index
      
      square_10_both.setAutoDraw(true);
    }

    
    // *square_11_both* updates
    if (t >= 0 && square_11_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_11_both.tStart = t;  // (not accounting for frame time here)
      square_11_both.frameNStart = frameN;  // exact frame index
      
      square_11_both.setAutoDraw(true);
    }

    
    // *square_12_both* updates
    if (t >= 0 && square_12_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_12_both.tStart = t;  // (not accounting for frame time here)
      square_12_both.frameNStart = frameN;  // exact frame index
      
      square_12_both.setAutoDraw(true);
    }

    
    // *square_13_both* updates
    if (t >= 0 && square_13_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_13_both.tStart = t;  // (not accounting for frame time here)
      square_13_both.frameNStart = frameN;  // exact frame index
      
      square_13_both.setAutoDraw(true);
    }

    
    // *square_14_both* updates
    if (t >= 0 && square_14_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_14_both.tStart = t;  // (not accounting for frame time here)
      square_14_both.frameNStart = frameN;  // exact frame index
      
      square_14_both.setAutoDraw(true);
    }

    
    // *square_15_both* updates
    if (t >= 0 && square_15_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_15_both.tStart = t;  // (not accounting for frame time here)
      square_15_both.frameNStart = frameN;  // exact frame index
      
      square_15_both.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of both_square_recComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function both_square_recRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'both_square_rec' ---
    for (const thisComponent of both_square_recComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_both.x) {  psychoJS.experiment.addData('mouse_both.x', mouse_both.x[0])};
    if (mouse_both.y) {  psychoJS.experiment.addData('mouse_both.y', mouse_both.y[0])};
    if (mouse_both.leftButton) {  psychoJS.experiment.addData('mouse_both.leftButton', mouse_both.leftButton[0])};
    if (mouse_both.midButton) {  psychoJS.experiment.addData('mouse_both.midButton', mouse_both.midButton[0])};
    if (mouse_both.rightButton) {  psychoJS.experiment.addData('mouse_both.rightButton', mouse_both.rightButton[0])};
    if (mouse_both.time) {  psychoJS.experiment.addData('mouse_both.time', mouse_both.time[0])};
    if (mouse_both.clicked_name) {  psychoJS.experiment.addData('mouse_both.clicked_name', mouse_both.clicked_name[0])};
    
    // the Routine "both_square_rec" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var both_square_rec_g_rComponents;
function both_square_rec_g_rRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'both_square_rec_g_r' ---
    t = 0;
    both_square_rec_g_rClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_square_rec_g_r_both
    
    
    if (((mouse_both.clicked_name[0] === "square_0_both") && (random_square_names[recall_counter] === "square_0_both"))) {
        corr_square_cliqued ++;
        correct_square_counter += 1;
        square_16_both.fillColor = "#006400";
    } else {
        if (((mouse_both.clicked_name[0] === "square_1_both") && (random_square_names[recall_counter] === "square_1_both"))) {
            corr_square_cliqued ++;
            correct_square_counter += 1;
            square_17_both.fillColor = "#006400";
        } else {
            if (((mouse_both.clicked_name[0] === "square_2_both") && (random_square_names[recall_counter] === "square_2_both"))) {
                corr_square_cliqued ++;
                correct_square_counter += 1;
                square_18_both.fillColor = "#006400";
            } else {
                if (((mouse_both.clicked_name[0] === "square_3_both") && (random_square_names[recall_counter] === "square_3_both"))) {
                    corr_square_cliqued ++;
                    correct_square_counter += 1;
                    square_19_both.fillColor = "#006400";
                } else {
                    if (((mouse_both.clicked_name[0] === "square_4_both") && (random_square_names[recall_counter] === "square_4_both"))) {
                        corr_square_cliqued ++;
                        correct_square_counter += 1;
                        square_20_both.fillColor = "#006400";
                    } else {
                        if (((mouse_both.clicked_name[0] === "square_5_both") && (random_square_names[recall_counter] === "square_5_both"))) {
                            corr_square_cliqued ++;
                            correct_square_counter += 1;
                            square_21_both.fillColor = "#006400";
                        } else {
                            if (((mouse_both.clicked_name[0] === "square_6_both") && (random_square_names[recall_counter] === "square_6_both"))) {
                                corr_square_cliqued ++;
                                correct_square_counter += 1;
                                square_22_both.fillColor = "#006400";
                            } else {
                                if (((mouse_both.clicked_name[0] === "square_7_both") && (random_square_names[recall_counter] === "square_7_both"))) {
                                    corr_square_cliqued ++;
                                    correct_square_counter += 1;
                                    square_23_both.fillColor = "#006400";
                                } else {
                                    if (((mouse_both.clicked_name[0] === "square_8_both") && (random_square_names[recall_counter] === "square_8_both"))) {
                                        corr_square_cliqued ++;
                                        correct_square_counter += 1;
                                        square_24_both.fillColor = "#006400";
                                    } else {
                                        if (((mouse_both.clicked_name[0] === "square_9_both") && (random_square_names[recall_counter] === "square_9_both"))) {
                                            corr_square_cliqued ++;
                                            correct_square_counter += 1;
                                            square_25_both.fillColor = "#006400";
                                        } else {
                                            if (((mouse_both.clicked_name[0] === "square_10_both") && (random_square_names[recall_counter] === "square_10_both"))) {
                                                corr_square_cliqued ++;
                                                correct_square_counter += 1;
                                                square_26_both.fillColor = "#006400";
                                            } else {
                                                if (((mouse_both.clicked_name[0] === "square_11_both") && (random_square_names[recall_counter] === "square_11_both"))) {
                                                    corr_square_cliqued ++;
                                                    correct_square_counter += 1;
                                                    square_27_both.fillColor = "#006400";
                                                } else {
                                                    if (((mouse_both.clicked_name[0] === "square_12_both") && (random_square_names[recall_counter] === "square_12_both"))) {
                                                        corr_square_cliqued ++;
                                                        correct_square_counter += 1;
                                                        square_28_both.fillColor = "#006400";
                                                    } else {
                                                        if (((mouse_both.clicked_name[0] === "square_13_both") && (random_square_names[recall_counter] === "square_13_both"))) {
                                                            corr_square_cliqued ++;
                                                            correct_square_counter += 1;
                                                            square_29_both.fillColor = "#006400";
                                                        } else {
                                                            if (((mouse_both.clicked_name[0] === "square_14_both") && (random_square_names[recall_counter] === "square_14_both"))) {
                                                                corr_square_cliqued ++;
                                                                correct_square_counter += 1;
                                                                square_30_both.fillColor = "#006400";
                                                            } else {
                                                                if (((mouse_both.clicked_name[0] === "square_15_both") && (random_square_names[recall_counter] === "square_15_both"))) {
                                                                    corr_square_cliqued ++;
                                                                    correct_square_counter += 1;
                                                                    square_31_both.fillColor = "#006400";
                                                                } else {
                                                                    square_16_both.fillColor = "#ff0000";
                                                                    square_17_both.fillColor = "#ff0000";
                                                                    square_18_both.fillColor = "#ff0000";
                                                                    square_19_both.fillColor = "#ff0000";
                                                                    square_20_both.fillColor = "#ff0000";
                                                                    square_21_both.fillColor = "#ff0000";
                                                                    square_22_both.fillColor = "#ff0000";
                                                                    square_23_both.fillColor = "#ff0000";
                                                                    square_24_both.fillColor = "#ff0000";
                                                                    square_25_both.fillColor = "#ff0000";
                                                                    square_26_both.fillColor = "#ff0000";
                                                                    square_27_both.fillColor = "#ff0000";
                                                                    square_28_both.fillColor = "#ff0000";
                                                                    square_29_both.fillColor = "#ff0000";
                                                                    square_30_both.fillColor = "#ff0000";
                                                                    square_31_both.fillColor = "#ff0000";
                                                                    if (random_square_names[recall_counter] === "square_0_both") {
                                                                        square_16_both.fillColor = "#006400";
                                                                    } else {
                                                                        if (random_square_names[recall_counter] === "square_1_both") {
                                                                            square_17_both.fillColor = "#006400";
                                                                        } else {
                                                                            if (random_square_names[recall_counter] === "square_2_both") {
                                                                                square_18_both.fillColor = "#006400";
                                                                            } else {
                                                                                if (random_square_names[recall_counter] === "square_3_both") {
                                                                                    square_19_both.fillColor = "#006400";
                                                                                } else {
                                                                                    if (random_square_names[recall_counter] === "square_4_both") {
                                                                                        square_20_both.fillColor = "#006400";
                                                                                    } else {
                                                                                        if (random_square_names[recall_counter] === "square_5_both") {
                                                                                            square_21_both.fillColor = "#006400";
                                                                                        } else {
                                                                                            if (random_square_names[recall_counter] === "square_6_both") {
                                                                                                square_22_both.fillColor = "#006400";
                                                                                            } else {
                                                                                                if (random_square_names[recall_counter] === "square_7_both") {
                                                                                                    square_23_both.fillColor = "#006400";
                                                                                                } else {
                                                                                                    if (random_square_names[recall_counter] === "square_8_both") {
                                                                                                        square_24_both.fillColor = "#006400";
                                                                                                    } else {
                                                                                                        if (random_square_names[recall_counter] === "square_9_both") {
                                                                                                            square_25_both.fillColor = "#006400";
                                                                                                        } else {
                                                                                                            if (random_square_names[recall_counter] === "square_10_both") {
                                                                                                                square_26_both.fillColor = "#006400";
                                                                                                            } else {
                                                                                                                if (random_square_names[recall_counter] === "square_11_both") {
                                                                                                                    square_27_both.fillColor = "#006400";
                                                                                                                } else {
                                                                                                                    if (random_square_names[recall_counter] === "square_12_both") {
                                                                                                                        square_28_both.fillColor = "#006400";
                                                                                                                    } else {
                                                                                                                        if (random_square_names[recall_counter] === "square_13_both") {
                                                                                                                            square_29_both.fillColor = "#006400";
                                                                                                                        } else {
                                                                                                                            if (random_square_names[recall_counter] === "square_14_both") {
                                                                                                                                square_30_both.fillColor = "#006400";
                                                                                                                            } else {
                                                                                                                                if (random_square_names[recall_counter] === "square_15_both") {
                                                                                                                                    square_31_both.fillColor = "#006400";
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    // keep track of which components have finished
    both_square_rec_g_rComponents = [];
    both_square_rec_g_rComponents.push(text_10_both);
    both_square_rec_g_rComponents.push(grid3_both);
    both_square_rec_g_rComponents.push(square_16_both);
    both_square_rec_g_rComponents.push(square_17_both);
    both_square_rec_g_rComponents.push(square_18_both);
    both_square_rec_g_rComponents.push(square_19_both);
    both_square_rec_g_rComponents.push(square_20_both);
    both_square_rec_g_rComponents.push(square_21_both);
    both_square_rec_g_rComponents.push(square_22_both);
    both_square_rec_g_rComponents.push(square_23_both);
    both_square_rec_g_rComponents.push(square_24_both);
    both_square_rec_g_rComponents.push(square_25_both);
    both_square_rec_g_rComponents.push(square_26_both);
    both_square_rec_g_rComponents.push(square_27_both);
    both_square_rec_g_rComponents.push(square_28_both);
    both_square_rec_g_rComponents.push(square_29_both);
    both_square_rec_g_rComponents.push(square_30_both);
    both_square_rec_g_rComponents.push(square_31_both);
    
    for (const thisComponent of both_square_rec_g_rComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function both_square_rec_g_rRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'both_square_rec_g_r' ---
    // get current time
    t = both_square_rec_g_rClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10_both* updates
    if (t >= 0 && text_10_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10_both.tStart = t;  // (not accounting for frame time here)
      text_10_both.frameNStart = frameN;  // exact frame index
      
      text_10_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_10_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10_both.setAutoDraw(false);
    }
    
    // *grid3_both* updates
    if (t >= 0 && grid3_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid3_both.tStart = t;  // (not accounting for frame time here)
      grid3_both.frameNStart = frameN;  // exact frame index
      
      grid3_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (grid3_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      grid3_both.setAutoDraw(false);
    }
    
    // *square_16_both* updates
    if (t >= 0 && square_16_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_16_both.tStart = t;  // (not accounting for frame time here)
      square_16_both.frameNStart = frameN;  // exact frame index
      
      square_16_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_16_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_16_both.setAutoDraw(false);
    }
    
    // *square_17_both* updates
    if (t >= 0 && square_17_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_17_both.tStart = t;  // (not accounting for frame time here)
      square_17_both.frameNStart = frameN;  // exact frame index
      
      square_17_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_17_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_17_both.setAutoDraw(false);
    }
    
    // *square_18_both* updates
    if (t >= 0 && square_18_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_18_both.tStart = t;  // (not accounting for frame time here)
      square_18_both.frameNStart = frameN;  // exact frame index
      
      square_18_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_18_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_18_both.setAutoDraw(false);
    }
    
    // *square_19_both* updates
    if (t >= 0 && square_19_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_19_both.tStart = t;  // (not accounting for frame time here)
      square_19_both.frameNStart = frameN;  // exact frame index
      
      square_19_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_19_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_19_both.setAutoDraw(false);
    }
    
    // *square_20_both* updates
    if (t >= 0 && square_20_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_20_both.tStart = t;  // (not accounting for frame time here)
      square_20_both.frameNStart = frameN;  // exact frame index
      
      square_20_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_20_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_20_both.setAutoDraw(false);
    }
    
    // *square_21_both* updates
    if (t >= 0 && square_21_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_21_both.tStart = t;  // (not accounting for frame time here)
      square_21_both.frameNStart = frameN;  // exact frame index
      
      square_21_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_21_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_21_both.setAutoDraw(false);
    }
    
    // *square_22_both* updates
    if (t >= 0 && square_22_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_22_both.tStart = t;  // (not accounting for frame time here)
      square_22_both.frameNStart = frameN;  // exact frame index
      
      square_22_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_22_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_22_both.setAutoDraw(false);
    }
    
    // *square_23_both* updates
    if (t >= 0 && square_23_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_23_both.tStart = t;  // (not accounting for frame time here)
      square_23_both.frameNStart = frameN;  // exact frame index
      
      square_23_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_23_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_23_both.setAutoDraw(false);
    }
    
    // *square_24_both* updates
    if (t >= 0 && square_24_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_24_both.tStart = t;  // (not accounting for frame time here)
      square_24_both.frameNStart = frameN;  // exact frame index
      
      square_24_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_24_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_24_both.setAutoDraw(false);
    }
    
    // *square_25_both* updates
    if (t >= 0 && square_25_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_25_both.tStart = t;  // (not accounting for frame time here)
      square_25_both.frameNStart = frameN;  // exact frame index
      
      square_25_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_25_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_25_both.setAutoDraw(false);
    }
    
    // *square_26_both* updates
    if (t >= 0 && square_26_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_26_both.tStart = t;  // (not accounting for frame time here)
      square_26_both.frameNStart = frameN;  // exact frame index
      
      square_26_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_26_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_26_both.setAutoDraw(false);
    }
    
    // *square_27_both* updates
    if (t >= 0 && square_27_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_27_both.tStart = t;  // (not accounting for frame time here)
      square_27_both.frameNStart = frameN;  // exact frame index
      
      square_27_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_27_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_27_both.setAutoDraw(false);
    }
    
    // *square_28_both* updates
    if (t >= 0 && square_28_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_28_both.tStart = t;  // (not accounting for frame time here)
      square_28_both.frameNStart = frameN;  // exact frame index
      
      square_28_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_28_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_28_both.setAutoDraw(false);
    }
    
    // *square_29_both* updates
    if (t >= 0 && square_29_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_29_both.tStart = t;  // (not accounting for frame time here)
      square_29_both.frameNStart = frameN;  // exact frame index
      
      square_29_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_29_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_29_both.setAutoDraw(false);
    }
    
    // *square_30_both* updates
    if (t >= 0 && square_30_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_30_both.tStart = t;  // (not accounting for frame time here)
      square_30_both.frameNStart = frameN;  // exact frame index
      
      square_30_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_30_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_30_both.setAutoDraw(false);
    }
    
    // *square_31_both* updates
    if (t >= 0 && square_31_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_31_both.tStart = t;  // (not accounting for frame time here)
      square_31_both.frameNStart = frameN;  // exact frame index
      
      square_31_both.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square_31_both.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_31_both.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of both_square_rec_g_rComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function both_square_rec_g_rRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'both_square_rec_g_r' ---
    for (const thisComponent of both_square_rec_g_rComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    square_16_both.fillColor = "#ff8080";
    square_17_both.fillColor  = "#ff8080";
    square_18_both.fillColor = "#ff8080";
    square_19_both.fillColor = "#ff8080";
    square_20_both.fillColor = "#ff8080";
    square_21_both.fillColor = "#ff8080";
    square_22_both.fillColor = "#ff8080";
    square_23_both.fillColor = "#ff8080";
    square_24_both.fillColor = "#ff8080";
    square_25_both.fillColor = "#ff8080";
    square_26_both.fillColor = "#ff8080";
    square_27_both.fillColor = "#ff8080";
    square_28_both.fillColor = "#ff8080";
    square_29_both.fillColor = "#ff8080";
    square_30_both.fillColor = "#ff8080";
    square_31_both.fillColor = "#ff8080";
    
    square_16_both.borderColor = '#ffffff'
    square_17_both.borderColor = '#ffffff'
    square_18_both.borderColor = '#ffffff'
    square_19_both.borderColor = '#ffffff'
    square_20_both.borderColor = '#ffffff'
    square_21_both.borderColor = '#ffffff'
    square_22_both.borderColor = '#ffffff'
    square_23_both.borderColor = '#ffffff'
    square_24_both.borderColor = '#ffffff'
    square_25_both.borderColor = '#ffffff'
    square_26_both.borderColor = '#ffffff'
    square_27_both.borderColor = '#ffffff'
    square_28_both.borderColor = '#ffffff'
    square_29_both.borderColor = '#ffffff'
    square_30_both.borderColor = '#ffffff'
    square_31_both.borderColor = '#ffffff'
    
    
    recall_counter += 1;
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_12_allKeys;
var both_next_setComponents;
function both_next_setRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'both_next_set' ---
    t = 0;
    both_next_setClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_next_square_set_both
    result_squares_text = "Eredményed: " + correct_square_counter + " / " + thisloop_item_number;
    
    if (correct_square_counter === thisloop_item_number) {
    loop_breaker = 0;
    } else {
    loop_breaker++;
    }
    
    end_prac_text;
    if (counter <= 2) {
    end_prac_text = "Nyomd meg a SPACE-t vagy kattints a következő gyakorlókörhöz!";
    } else if (counter === 3) {
    end_prac_text = "Szép! Most következzenek az éles körök!\n\nPróbálj meg minél magasabb szintre jutni!\n\nSPACE/Katt";
    } else {
    end_prac_text = "SPACE/Katt";
    }
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // setup some python lists for storing info about the mouse_8
    // current position of the mouse:
    mouse_8.x = [];
    mouse_8.y = [];
    mouse_8.leftButton = [];
    mouse_8.midButton = [];
    mouse_8.rightButton = [];
    mouse_8.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    both_next_setComponents = [];
    both_next_setComponents.push(text_result_square_both);
    both_next_setComponents.push(text_end_prac_both);
    both_next_setComponents.push(key_resp_12);
    both_next_setComponents.push(mouse_8);
    
    for (const thisComponent of both_next_setComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function both_next_setRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'both_next_set' ---
    // get current time
    t = both_next_setClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_result_square_both* updates
    if (t >= 0.0 && text_result_square_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_result_square_both.tStart = t;  // (not accounting for frame time here)
      text_result_square_both.frameNStart = frameN;  // exact frame index
      
      text_result_square_both.setAutoDraw(true);
    }

    
    if (text_result_square_both.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_result_square_both.setText(result_squares_text, false);
    }
    
    // *text_end_prac_both* updates
    if (t >= 0.0 && text_end_prac_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_prac_both.tStart = t;  // (not accounting for frame time here)
      text_end_prac_both.frameNStart = frameN;  // exact frame index
      
      text_end_prac_both.setAutoDraw(true);
    }

    
    if (text_end_prac_both.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_end_prac_both.setText(end_prac_text, false);
    }
    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_8* updates
    if (t >= 0.0 && mouse_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_8.tStart = t;  // (not accounting for frame time here)
      mouse_8.frameNStart = frameN;  // exact frame index
      
      mouse_8.status = PsychoJS.Status.STARTED;
      mouse_8.mouseClock.reset();
      prevButtonState = mouse_8.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_8.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_8.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_8.getPos();
          mouse_8.x.push(_mouseXYs[0]);
          mouse_8.y.push(_mouseXYs[1]);
          mouse_8.leftButton.push(_mouseButtons[0]);
          mouse_8.midButton.push(_mouseButtons[1]);
          mouse_8.rightButton.push(_mouseButtons[2]);
          mouse_8.time.push(mouse_8.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of both_next_setComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function both_next_setRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'both_next_set' ---
    for (const thisComponent of both_next_setComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_next_square_set_both
    total_trials = 0;
    correct_answers = 0;
    accuracyText = "";
    correct_total_text = "";
    text_how_many_correct_both.setText("", true)
    
    psychoJS.experiment.addData("number_of_correct_squares_clicked", correct_square_counter);
    psychoJS.experiment.addData("total_squares_clicked", thisloop_item_number);
    if ((loop_breaker === 3)) {
        trials_both.finished = true;
    }
    
    text_end_prac_both.setText("", true);
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_8.x) {  psychoJS.experiment.addData('mouse_8.x', mouse_8.x[0])};
    if (mouse_8.y) {  psychoJS.experiment.addData('mouse_8.y', mouse_8.y[0])};
    if (mouse_8.leftButton) {  psychoJS.experiment.addData('mouse_8.leftButton', mouse_8.leftButton[0])};
    if (mouse_8.midButton) {  psychoJS.experiment.addData('mouse_8.midButton', mouse_8.midButton[0])};
    if (mouse_8.rightButton) {  psychoJS.experiment.addData('mouse_8.rightButton', mouse_8.rightButton[0])};
    if (mouse_8.time) {  psychoJS.experiment.addData('mouse_8.time', mouse_8.time[0])};
    
    // the Routine "both_next_set" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var overall_accuracy_both;
var _key_resp_11_allKeys;
var both_endComponents;
function both_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'both_end' ---
    t = 0;
    both_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_both
    square_end_text = `Szép eredmény!
    A legmagasabb szint, amelyre eljutottál: ${thisloop_item_number}`
    ;
    overall_accuracy_both = `A szimmetriadöntésekben elért arányod: ${overall_symm_corr} / ${overall_symm}`;
    if ((overall_symm === 0)) {
        accuracyPercent = 0;
    } else {
        accuracyPercent = ((overall_symm_corr / overall_symm) * 100).toFixed(1);
    }
    
    
    if ((accuracyPercent >= 85)) {
        text_accuracy_both.color = "#006400";
    
    } else {
        text_accuracy_both.color = "#800000";
    
    }
    accuracyText = (`${accuracyPercent}` + "%");
    
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // setup some python lists for storing info about the mouse_7
    // current position of the mouse:
    mouse_7.x = [];
    mouse_7.y = [];
    mouse_7.leftButton = [];
    mouse_7.midButton = [];
    mouse_7.rightButton = [];
    mouse_7.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    both_endComponents = [];
    both_endComponents.push(text_square_end_both);
    both_endComponents.push(text_14);
    both_endComponents.push(text_accuracy_both);
    both_endComponents.push(text_next_questions);
    both_endComponents.push(key_resp_11);
    both_endComponents.push(mouse_7);
    
    for (const thisComponent of both_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function both_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'both_end' ---
    // get current time
    t = both_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_square_end_both* updates
    if (t >= 0.0 && text_square_end_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_square_end_both.tStart = t;  // (not accounting for frame time here)
      text_square_end_both.frameNStart = frameN;  // exact frame index
      
      text_square_end_both.setAutoDraw(true);
    }

    
    if (text_square_end_both.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_square_end_both.setText(square_end_text, false);
    }
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    
    // *text_accuracy_both* updates
    if (t >= 0.0 && text_accuracy_both.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_accuracy_both.tStart = t;  // (not accounting for frame time here)
      text_accuracy_both.frameNStart = frameN;  // exact frame index
      
      text_accuracy_both.setAutoDraw(true);
    }

    
    if (text_accuracy_both.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_accuracy_both.setText(accuracyText, false);
    }
    
    // *text_next_questions* updates
    if (t >= 0.0 && text_next_questions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_next_questions.tStart = t;  // (not accounting for frame time here)
      text_next_questions.frameNStart = frameN;  // exact frame index
      
      text_next_questions.setAutoDraw(true);
    }

    
    if (text_next_questions.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_next_questions.setText('Kérünk, most újra válaszolj a három kérdésre a skálákra/gombokra kattintva, azonban válaszaid csak a mostani feladatra vonakozzanak.\n\nSPACE/Katt\n', false);
    }
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *mouse_7* updates
    if (t >= 0.0 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_7.getPos();
          mouse_7.x.push(_mouseXYs[0]);
          mouse_7.y.push(_mouseXYs[1]);
          mouse_7.leftButton.push(_mouseButtons[0]);
          mouse_7.midButton.push(_mouseButtons[1]);
          mouse_7.rightButton.push(_mouseButtons[2]);
          mouse_7.time.push(mouse_7.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of both_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function both_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'both_end' ---
    for (const thisComponent of both_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_7.x) {  psychoJS.experiment.addData('mouse_7.x', mouse_7.x[0])};
    if (mouse_7.y) {  psychoJS.experiment.addData('mouse_7.y', mouse_7.y[0])};
    if (mouse_7.leftButton) {  psychoJS.experiment.addData('mouse_7.leftButton', mouse_7.leftButton[0])};
    if (mouse_7.midButton) {  psychoJS.experiment.addData('mouse_7.midButton', mouse_7.midButton[0])};
    if (mouse_7.rightButton) {  psychoJS.experiment.addData('mouse_7.rightButton', mouse_7.rightButton[0])};
    if (mouse_7.time) {  psychoJS.experiment.addData('mouse_7.time', mouse_7.time[0])};
    
    // the Routine "both_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_bye_allKeys;
var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bye' ---
    t = 0;
    byeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_bye.keys = undefined;
    key_resp_bye.rt = undefined;
    _key_resp_bye_allKeys = [];
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(text_bye);
    byeComponents.push(key_resp_bye);
    
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bye' ---
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_bye* updates
    if (t >= 0.0 && text_bye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_bye.tStart = t;  // (not accounting for frame time here)
      text_bye.frameNStart = frameN;  // exact frame index
      
      text_bye.setAutoDraw(true);
    }

    
    // *key_resp_bye* updates
    if (t >= 0.0 && key_resp_bye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_bye.tStart = t;  // (not accounting for frame time here)
      key_resp_bye.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_bye.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_bye.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_bye.clearEvents(); });
    }

    if (key_resp_bye.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_bye.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_bye_allKeys = _key_resp_bye_allKeys.concat(theseKeys);
      if (_key_resp_bye_allKeys.length > 0) {
        key_resp_bye.keys = _key_resp_bye_allKeys[_key_resp_bye_allKeys.length - 1].name;  // just the last key pressed
        key_resp_bye.rt = _key_resp_bye_allKeys[_key_resp_bye_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bye' ---
    for (const thisComponent of byeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_bye.corr, level);
    }
    psychoJS.experiment.addData('key_resp_bye.keys', key_resp_bye.keys);
    if (typeof key_resp_bye.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_bye.rt', key_resp_bye.rt);
        routineTimer.reset();
        }
    
    key_resp_bye.stop();
    // the Routine "bye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

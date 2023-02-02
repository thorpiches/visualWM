#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on február 02, 2023, at 00:31
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'Symmetry_Span_1'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\Kristof\\Desktop\\SymmetrySpan\\SymmetrySpan_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "wlc" ---
text = visual.TextStim(win=win, name='text',
    text='Üdv!\nEbben a kísérletben az lesz a feladatod, hogy megjegyezd, milyen sorrendben jelennek meg piros négyzetek egy négyzetrácsban. \n\nHa ez a rész sikerült, kicsit nehezedni fog a feladat: \nMinden piros négyzet között meg fog jelenni egy ábra, amelyről el kell döntened, hogy függőlegesen szimmetrikus-e vagy sem.\n\nElőször lesz egy kis gyakorlás, hogy megismerkedj a feladattal.\n\nHa készen állsz, nyomd meg a SPACE billenyűt vagy kattints egyet.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()
mouse_4 = event.Mouse(win=win)
x, y = [None, None]
mouse_4.mouseClock = core.Clock()

# --- Initialize components for Routine "ins_square_1" ---
text_8 = visual.TextStim(win=win, name='text_8',
    text='Egy 4x4-es négyzetrácsban piros négyzetek fognak megjelenni egymás után. Jegyezd meg a helyes sorrendet!\n\nHa lemegy a feladat, meg fog jelenni egy üres négyzetrács. \nAbban a sorrendben kell kattintanod a négyzetekre, ahogyan emlékeid szerint megjelentek. Erre bármennyi időd lesz, nem kell sietni.\n\nAhányas szinten vagy, annyi négyzet fog megjelenni. Először ez viszonylag kevés lesz, ám ha sikerül adott szinten a sorrendet többször is helyesen megadnod, egy idő után szintet lépsz. Próbálj meg minél magasabb szintet elérni!\n\nMost egy pár gyakorlókör fog következni. \nSPACE/Kattintás\n',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_8 = keyboard.Keyboard()
mouse_5 = event.Mouse(win=win)
x, y = [None, None]
mouse_5.mouseClock = core.Clock()

# --- Initialize components for Routine "square_helper" ---
# Run 'Begin Experiment' code from code_square_helper
import random

#create an array of the square names
loop_breaker = 0
corr_square_clicked = 0
square_names = ["square_" + str(i) for i in range(16)]
square_names_both = ["square_" + str(i) + "_both" for i in range(16)]

#create an array of the square names
square_coordinates = [
    [-0.225, 0.225], [-0.075, 0.225], [0.075, 0.225], [0.225, 0.225],
    [-0.225, 0.075], [-0.075, 0.075], [0.075, 0.075], [0.225, 0.075],
    [-0.225, -0.075], [-0.075, -0.075], [0.075, -0.075], [0.225, -0.075],
    [-0.225, -0.225], [-0.075, -0.225], [0.075, -0.225], [0.225, -0.225]
]

# creating the dicts
square_dict = dict(zip(square_names, square_coordinates))
square_dict_both = dict(zip(square_names_both, square_coordinates))

# here i can give how many sequences I want (and what length) 
prac_loop_lengths = [2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12]
# defining how many practice loops there are
how_many_prac_loops = len(prac_loop_lengths)

thisloop_item_number = 0
counter = 0

# --- Initialize components for Routine "square_level" ---
text_level_1 = visual.TextStim(win=win, name='text_level_1',
    text='SZINT: ',
    font='Open Sans',
    pos=(-0.15, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_level_2 = visual.TextStim(win=win, name='text_level_2',
    text='',
    font='Open Sans',
    pos=(0.15, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "square" ---
fixation2 = visual.TextStim(win=win, name='fixation2',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
grid = visual.ImageStim(
    win=win,
    name='grid', 
    image='resources/grid.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
square_rand = visual.Rect(
    win=win, name='square_rand',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor=[0.804,-1.000,-1.000],
    opacity=None, depth=-3.0, interpolate=True)

# --- Initialize components for Routine "square_rec" ---
text_9 = visual.TextStim(win=win, name='text_9',
    text='Kattints a négyzetekre abban a sorrendben, ahogyan megjelentek!',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
grid2 = visual.ImageStim(
    win=win,
    name='grid2', 
    image='resources/grid.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
square_0 = visual.Rect(
    win=win, name='square_0',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-3.0, interpolate=True)
square_1 = visual.Rect(
    win=win, name='square_1',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-4.0, interpolate=True)
square_2 = visual.Rect(
    win=win, name='square_2',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-5.0, interpolate=True)
square_3 = visual.Rect(
    win=win, name='square_3',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-6.0, interpolate=True)
square_4 = visual.Rect(
    win=win, name='square_4',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-7.0, interpolate=True)
square_5 = visual.Rect(
    win=win, name='square_5',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-8.0, interpolate=True)
square_6 = visual.Rect(
    win=win, name='square_6',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-9.0, interpolate=True)
square_7 = visual.Rect(
    win=win, name='square_7',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-10.0, interpolate=True)
square_8 = visual.Rect(
    win=win, name='square_8',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-11.0, interpolate=True)
square_9 = visual.Rect(
    win=win, name='square_9',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-12.0, interpolate=True)
square_10 = visual.Rect(
    win=win, name='square_10',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-13.0, interpolate=True)
square_11 = visual.Rect(
    win=win, name='square_11',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-14.0, interpolate=True)
square_12 = visual.Rect(
    win=win, name='square_12',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-15.0, interpolate=True)
square_13 = visual.Rect(
    win=win, name='square_13',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-16.0, interpolate=True)
square_14 = visual.Rect(
    win=win, name='square_14',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-17.0, interpolate=True)
square_15 = visual.Rect(
    win=win, name='square_15',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-18.0, interpolate=True)

# --- Initialize components for Routine "square_rec_g_r" ---
# Run 'Begin Experiment' code from code_square_rec_g_r
recall_counter = 0

text_10 = visual.TextStim(win=win, name='text_10',
    text='Kattints a négyzetekre abban a sorrendben, ahogyan megjelentek!',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
grid3 = visual.ImageStim(
    win=win,
    name='grid3', 
    image='resources/grid.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
square_16 = visual.Rect(
    win=win, name='square_16',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-3.0, interpolate=True)
square_17 = visual.Rect(
    win=win, name='square_17',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-4.0, interpolate=True)
square_18 = visual.Rect(
    win=win, name='square_18',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-5.0, interpolate=True)
square_19 = visual.Rect(
    win=win, name='square_19',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-6.0, interpolate=True)
square_20 = visual.Rect(
    win=win, name='square_20',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-7.0, interpolate=True)
square_21 = visual.Rect(
    win=win, name='square_21',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-8.0, interpolate=True)
square_22 = visual.Rect(
    win=win, name='square_22',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-9.0, interpolate=True)
square_23 = visual.Rect(
    win=win, name='square_23',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-10.0, interpolate=True)
square_24 = visual.Rect(
    win=win, name='square_24',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-11.0, interpolate=True)
square_25 = visual.Rect(
    win=win, name='square_25',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-12.0, interpolate=True)
square_26 = visual.Rect(
    win=win, name='square_26',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-13.0, interpolate=True)
square_27 = visual.Rect(
    win=win, name='square_27',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-14.0, interpolate=True)
square_28 = visual.Rect(
    win=win, name='square_28',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-15.0, interpolate=True)
square_29 = visual.Rect(
    win=win, name='square_29',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-16.0, interpolate=True)
square_30 = visual.Rect(
    win=win, name='square_30',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-17.0, interpolate=True)
square_31 = visual.Rect(
    win=win, name='square_31',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-18.0, interpolate=True)

# --- Initialize components for Routine "next_set" ---
text_result_squares = visual.TextStim(win=win, name='text_result_squares',
    text='',
    font='Open Sans',
    pos=(0, 0.15), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_end_prac = visual.TextStim(win=win, name='text_end_prac',
    text='',
    font='Open Sans',
    pos=(0, -0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()
key_resp_13 = keyboard.Keyboard()

# --- Initialize components for Routine "ins_square_end" ---
text_square_end = visual.TextStim(win=win, name='text_square_end',
    text='',
    font='Open Sans',
    pos=(0, 0.25), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_11 = visual.TextStim(win=win, name='text_11',
    text='A következő részben a feladat hasonló lesz.\n\nUgyanígy négyzetek fognak megjelenni, és a feladatod továbbra is minél hosszabb szekvenciákat megjegyezni.\nAzonban minden négyzet között lesz egy döntési feladatod: el kell dönteni egy ábráról, hogy függőlegesen szimmetrikus-e.\n\nElőször nézzük meg, hogyan fog a szimmetriadöntés kinézni.\nSPACE/Katt',
    font='Open Sans',
    pos=(0, -0.1), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_9 = keyboard.Keyboard()
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()

# --- Initialize components for Routine "ins_sym_1" ---
text_2 = visual.TextStim(win=win, name='text_2',
    text='Meg fog jelenni egy kép, amelyről el kell döntened, hogy FÜGGŐLEGESEN SZIMMETRIKUS-e.\n \nHa szimmetrikus, a BAL gombot (a billentyűzeten) kell megnyomnod,\nha nem szimmetrikus, a JOBB gombot.\n\n\nSPACE/Katt',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()
mouse_6 = event.Mouse(win=win)
x, y = [None, None]
mouse_6.mouseClock = core.Clock()

# --- Initialize components for Routine "ins_sym_2" ---
text_3 = visual.TextStim(win=win, name='text_3',
    text='Az alábbi ábra például függőlegesen szimmetrikus.\nNyomd meg a megfelelő gombot',
    font='Open Sans',
    pos=(0, 0.35), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
image_sym = visual.ImageStim(
    win=win,
    name='image_sym', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_sym_nsym = visual.TextStim(win=win, name='text_sym_nsym',
    text='SZIMMETRIKUS      NEM SZIMMETRIKUS\nBAL                     JOBB        ',
    font='Open Sans',
    pos=(0.04, -0.30), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_3 = keyboard.Keyboard()

# --- Initialize components for Routine "ins_sym_3" ---
text_4 = visual.TextStim(win=win, name='text_4',
    text='Az alábbi ábra pedig szimmetrikus.\nNyomd meg a megfelelő gombot.',
    font='Open Sans',
    pos=(0, 0.35), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
image = visual.ImageStim(
    win=win,
    name='image', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_sym_nsym_2 = visual.TextStim(win=win, name='text_sym_nsym_2',
    text='SZIMMETRIKUS      NEM SZIMMETRIKUS\nBAL                     JOBB        ',
    font='Open Sans',
    pos=(0.04, -0.30), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_4 = keyboard.Keyboard()

# --- Initialize components for Routine "ins2" ---
text_5 = visual.TextStim(win=win, name='text_5',
    text='Most ebből egy pár gyakorlókör fog következni.\n\nMinél gyorsabban és pontosabban igyekezz válaszolni.\nÖsszesen két másodperced van, utána a rendszer automatikusan rossz választ rögzít!\n\nKészítsd az ujjaidat a megfelelő gombokra\nSzimmetrikus: BAL gomb\nNem szimmetrikus: JOBB gomb\n\nSPACE',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# --- Initialize components for Routine "prac_sym" ---
# Run 'Begin Experiment' code from code_prac_sym
import os
import random
from psychopy import core

# Define the path to the resources folder
resources_path = 'resources/'
# Define how many trials I want for the symmetry practice
pracSymmTrialNumber = 10
# Define the array for the images to be shown
selected_images = []
# Setting total trials, correct answers and countdown text
total_trials = 0
correct_answers = 0
countDownText = ""
correct_total_text = ""
# Setting timer for live countdown (2000 ms plus 500 fixation)
timerPracSym = core.CountdownTimer(2.5)


# Create the first array for the non-symmetric images
non_sym_images = []
for i in range(1, 80):
    image_name = 'nsym' + str(i) + '.JPG'
    image_path = os.path.join(resources_path, image_name)
    non_sym_images.append(image_path)
    
# Create the second array for the symmetric images
sym_images = []
for i in range(1, 80):
    image_name = 'sym' + str(i) + '.JPG'
    image_path = os.path.join(resources_path, image_name)
    sym_images.append(image_path)
    
    
#creating function that chooses x amount of sym and nsym images

def select_images(non_sym_images, sym_images, pracSymmTrialNumber):
    if pracSymmTrialNumber % 2 == 0:
        half_trials = int(pracSymmTrialNumber / 2)
        # Select random samples from sym and nsym images
        selected_non_sym_images = random.sample(non_sym_images, half_trials)
        selected_sym_images = random.sample(sym_images, half_trials)
        selected_images = selected_non_sym_images + selected_sym_images

        random.shuffle(selected_images)
    else:
        half_trials = int((pracSymmTrialNumber + 1) / 2)
        #same here
        selected_non_sym_images = random.sample(non_sym_images, half_trials)
        selected_sym_images = random.sample(sym_images, half_trials)
        selected_images = selected_non_sym_images + selected_sym_images
        #but we delete one
        random.shuffle(selected_images)
        selected_images.pop()
    return selected_images
    
selected_images = select_images(non_sym_images, sym_images, pracSymmTrialNumber)
    


fixation = visual.TextStim(win=win, name='fixation',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
text_sym_nsym_3 = visual.TextStim(win=win, name='text_sym_nsym_3',
    text='SZIMMETRIKUS      NEM SZIMMETRIKUS\nBAL                     JOBB        ',
    font='Open Sans',
    pos=(0.04, -0.30), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_countdown = visual.TextStim(win=win, name='text_countdown',
    text='',
    font='Open Sans',
    pos=(0.5, 0.1), height=0.06, wrapWidth=None, ori=0.0, 
    color=[1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_how_many_correct = visual.TextStim(win=win, name='text_how_many_correct',
    text='',
    font='Open Sans',
    pos=(0.5, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
key_resp_6 = keyboard.Keyboard()

# --- Initialize components for Routine "prac_sym_g_r" ---
# Run 'Begin Experiment' code from code_prac_sym_g_r

# Define how much time was needid for the symmetry choice
usedTime = 0


# Import the green and red mask images
maskColor = ""
greenMask = os.path.join(resources_path, '1green.JPG')
redMask = os.path.join(resources_path, '1red.JPG')

image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_4 = visual.ImageStim(
    win=win,
    name='image_4', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=0.7,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# --- Initialize components for Routine "prac_sym_fb" ---
# Run 'Begin Experiment' code from code_prac_sym_fb
accuracyPercent = 0
prac_sym_loop_nr = 0
prac_fb = ""
accuracyText = ""
text_6 = visual.TextStim(win=win, name='text_6',
    text='Eredményed: ',
    font='Open Sans',
    pos=(-0.12, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_score = visual.TextStim(win=win, name='text_score',
    text='',
    font='Open Sans',
    pos=(0.12, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_7 = visual.TextStim(win=win, name='text_7',
    text='',
    font='Open Sans',
    pos=(0, -0.07), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_7 = keyboard.Keyboard()

# --- Initialize components for Routine "ins_both" ---
text_12 = visual.TextStim(win=win, name='text_12',
    text='Most nézzük meg, hogyan fog a négyzetemlékezeti és a szimmetriadöntéses feladat egyszerre kinézni!\n\nMinden bemutatott piros négyzet után döntened kell egy kép szimetrikusságáról!\n\nEgyrészt igyekezz megjegyezni, hol jelennek meg a négyzetek, másrészt ne felejtsd el, hogy minden négyzet között helyesen kell döntened 2mp-en belül az ábrák függőleges szimmetrikusságáról!\n\nElőször lesz egy pár gyakorlókör.\n\nKészítsd az ujjaidat a BAL és JOBB gombokra.\nSPACE',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_10 = keyboard.Keyboard()

# --- Initialize components for Routine "both_helper" ---
# Run 'Begin Experiment' code from code_both_helper
# setting variables for overall symmetry accuracy
overall_symm = 0
overall_symm_corr = 0

# --- Initialize components for Routine "both_level" ---
text_both_level_1 = visual.TextStim(win=win, name='text_both_level_1',
    text='SZINT: ',
    font='Open Sans',
    pos=(-0.15, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_both_level_2 = visual.TextStim(win=win, name='text_both_level_2',
    text='',
    font='Open Sans',
    pos=(0.15, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "both_square" ---
fixation_both = visual.TextStim(win=win, name='fixation_both',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
grid_both = visual.ImageStim(
    win=win,
    name='grid_both', 
    image='resources/grid.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
square_rand_both = visual.Rect(
    win=win, name='square_rand_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor=[0.804,-1.000,-1.000],
    opacity=None, depth=-3.0, interpolate=True)

# --- Initialize components for Routine "both_sym" ---
# Run 'Begin Experiment' code from code_prac_sym_both
selected_images_both = []

fixation_both_2 = visual.TextStim(win=win, name='fixation_both_2',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
image_2_both = visual.ImageStim(
    win=win,
    name='image_2_both', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
text_sym_nsym_3_both = visual.TextStim(win=win, name='text_sym_nsym_3_both',
    text='SZIMMETRIKUS      NEM SZIMMETRIKUS\nBAL                     JOBB        ',
    font='Open Sans',
    pos=(0.04, -0.30), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_countdown_both = visual.TextStim(win=win, name='text_countdown_both',
    text='',
    font='Open Sans',
    pos=(0.5, 0.1), height=0.06, wrapWidth=None, ori=0.0, 
    color=[1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_how_many_correct_both = visual.TextStim(win=win, name='text_how_many_correct_both',
    text='',
    font='Open Sans',
    pos=(0.5, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
key_resp_6_both = keyboard.Keyboard()

# --- Initialize components for Routine "both_sym_g_r" ---
# Run 'Begin Experiment' code from code_prac_sym_g_r_both

# Define how much time was needid for the symmetry choice
usedTime = 0



image_3_both = visual.ImageStim(
    win=win,
    name='image_3_both', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_4_both = visual.ImageStim(
    win=win,
    name='image_4_both', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=0.7,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# --- Initialize components for Routine "both_square_rec" ---
text9_both = visual.TextStim(win=win, name='text9_both',
    text='Kattints a négyzetekre abban a sorrendben, ahogyan megjelentek!',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
grid2_both = visual.ImageStim(
    win=win,
    name='grid2_both', 
    image='resources/grid.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
mouse_both = event.Mouse(win=win)
x, y = [None, None]
mouse_both.mouseClock = core.Clock()
square_0_both = visual.Rect(
    win=win, name='square_0_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-3.0, interpolate=True)
square_1_both = visual.Rect(
    win=win, name='square_1_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-4.0, interpolate=True)
square_2_both = visual.Rect(
    win=win, name='square_2_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-5.0, interpolate=True)
square_3_both = visual.Rect(
    win=win, name='square_3_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-6.0, interpolate=True)
square_4_both = visual.Rect(
    win=win, name='square_4_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-7.0, interpolate=True)
square_5_both = visual.Rect(
    win=win, name='square_5_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-8.0, interpolate=True)
square_6_both = visual.Rect(
    win=win, name='square_6_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-9.0, interpolate=True)
square_7_both = visual.Rect(
    win=win, name='square_7_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-10.0, interpolate=True)
square_8_both = visual.Rect(
    win=win, name='square_8_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-11.0, interpolate=True)
square_9_both = visual.Rect(
    win=win, name='square_9_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-12.0, interpolate=True)
square_10_both = visual.Rect(
    win=win, name='square_10_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-13.0, interpolate=True)
square_11_both = visual.Rect(
    win=win, name='square_11_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-14.0, interpolate=True)
square_12_both = visual.Rect(
    win=win, name='square_12_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-15.0, interpolate=True)
square_13_both = visual.Rect(
    win=win, name='square_13_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-16.0, interpolate=True)
square_14_both = visual.Rect(
    win=win, name='square_14_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-17.0, interpolate=True)
square_15_both = visual.Rect(
    win=win, name='square_15_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-18.0, interpolate=True)

# --- Initialize components for Routine "both_square_rec_g_r" ---
text_10_both = visual.TextStim(win=win, name='text_10_both',
    text='Kattints a négyzetekre abban a sorrendben, ahogyan megjelentek!',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
grid3_both = visual.ImageStim(
    win=win,
    name='grid3_both', 
    image='resources/grid.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.6, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
square_16_both = visual.Rect(
    win=win, name='square_16_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-3.0, interpolate=True)
square_17_both = visual.Rect(
    win=win, name='square_17_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-4.0, interpolate=True)
square_18_both = visual.Rect(
    win=win, name='square_18_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-5.0, interpolate=True)
square_19_both = visual.Rect(
    win=win, name='square_19_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, 0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-6.0, interpolate=True)
square_20_both = visual.Rect(
    win=win, name='square_20_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-7.0, interpolate=True)
square_21_both = visual.Rect(
    win=win, name='square_21_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-8.0, interpolate=True)
square_22_both = visual.Rect(
    win=win, name='square_22_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-9.0, interpolate=True)
square_23_both = visual.Rect(
    win=win, name='square_23_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, 0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-10.0, interpolate=True)
square_24_both = visual.Rect(
    win=win, name='square_24_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-11.0, interpolate=True)
square_25_both = visual.Rect(
    win=win, name='square_25_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-12.0, interpolate=True)
square_26_both = visual.Rect(
    win=win, name='square_26_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-13.0, interpolate=True)
square_27_both = visual.Rect(
    win=win, name='square_27_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, -0.075), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-14.0, interpolate=True)
square_28_both = visual.Rect(
    win=win, name='square_28_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.225, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-15.0, interpolate=True)
square_29_both = visual.Rect(
    win=win, name='square_29_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(-0.075, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-16.0, interpolate=True)
square_30_both = visual.Rect(
    win=win, name='square_30_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.075, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-17.0, interpolate=True)
square_31_both = visual.Rect(
    win=win, name='square_31_both',
    width=(0.13, 0.13)[0], height=(0.13, 0.13)[1],
    ori=0.0, pos=(0.225, -0.225), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1.000,0.004,0.004],
    opacity=1.0, depth=-18.0, interpolate=True)

# --- Initialize components for Routine "both_next_set" ---
text_result_square_both = visual.TextStim(win=win, name='text_result_square_both',
    text='',
    font='Open Sans',
    pos=(0, 0.15), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_end_prac_both = visual.TextStim(win=win, name='text_end_prac_both',
    text='',
    font='Open Sans',
    pos=(0, -0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_12 = keyboard.Keyboard()

# --- Initialize components for Routine "both_end" ---
text_square_end_both = visual.TextStim(win=win, name='text_square_end_both',
    text='',
    font='Open Sans',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_14 = visual.TextStim(win=win, name='text_14',
    text='A szimmetriadöntésekben elért arányod:',
    font='Open Sans',
    pos=(0, 0.1), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_accuracy_both = visual.TextStim(win=win, name='text_accuracy_both',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_less_acc = visual.TextStim(win=win, name='text_less_acc',
    text='',
    font='Open Sans',
    pos=(0, -0.15), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
key_resp_11 = keyboard.Keyboard()
mouse_7 = event.Mouse(win=win)
x, y = [None, None]
mouse_7.mouseClock = core.Clock()

# --- Initialize components for Routine "bye" ---
text_bye = visual.TextStim(win=win, name='text_bye',
    text='Köszi, hogy részt vettél a kísérletben!\n\nAmennyiben bármilyen kérdésed, észrevételed van, kérlek jelezd a tájékoztató dokumentumban megosztott elérhetőségek egyikén!\n\nA befejezéshez nyomd meg a SPACE-t',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_bye = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "wlc" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# setup some python lists for storing info about the mouse_4
mouse_4.x = []
mouse_4.y = []
mouse_4.leftButton = []
mouse_4.midButton = []
mouse_4.rightButton = []
mouse_4.time = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
wlcComponents = [text, key_resp, mouse_4]
for thisComponent in wlcComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "wlc" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text.started')
        text.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp.started')
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # *mouse_4* updates
    if mouse_4.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_4.frameNStart = frameN  # exact frame index
        mouse_4.tStart = t  # local t and not account for scr refresh
        mouse_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_4.started', t)
        mouse_4.status = STARTED
        mouse_4.mouseClock.reset()
        prevButtonState = mouse_4.getPressed()  # if button is down already this ISN'T a new click
    if mouse_4.status == STARTED:  # only update if started and not finished!
        buttons = mouse_4.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                x, y = mouse_4.getPos()
                mouse_4.x.append(x)
                mouse_4.y.append(y)
                buttons = mouse_4.getPressed()
                mouse_4.leftButton.append(buttons[0])
                mouse_4.midButton.append(buttons[1])
                mouse_4.rightButton.append(buttons[2])
                mouse_4.time.append(mouse_4.mouseClock.getTime())
                
                continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in wlcComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "wlc" ---
for thisComponent in wlcComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.nextEntry()
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_4.x', mouse_4.x)
thisExp.addData('mouse_4.y', mouse_4.y)
thisExp.addData('mouse_4.leftButton', mouse_4.leftButton)
thisExp.addData('mouse_4.midButton', mouse_4.midButton)
thisExp.addData('mouse_4.rightButton', mouse_4.rightButton)
thisExp.addData('mouse_4.time', mouse_4.time)
thisExp.nextEntry()
# the Routine "wlc" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ins_square_1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_8.keys = []
key_resp_8.rt = []
_key_resp_8_allKeys = []
# setup some python lists for storing info about the mouse_5
mouse_5.x = []
mouse_5.y = []
mouse_5.leftButton = []
mouse_5.midButton = []
mouse_5.rightButton = []
mouse_5.time = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
ins_square_1Components = [text_8, key_resp_8, mouse_5]
for thisComponent in ins_square_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins_square_1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_8* updates
    if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_8.frameNStart = frameN  # exact frame index
        text_8.tStart = t  # local t and not account for scr refresh
        text_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_8.started')
        text_8.setAutoDraw(True)
    
    # *key_resp_8* updates
    waitOnFlip = False
    if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_8.frameNStart = frameN  # exact frame index
        key_resp_8.tStart = t  # local t and not account for scr refresh
        key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_8.started')
        key_resp_8.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_8.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_8.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_8_allKeys.extend(theseKeys)
        if len(_key_resp_8_allKeys):
            key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
            key_resp_8.rt = _key_resp_8_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # *mouse_5* updates
    if mouse_5.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_5.frameNStart = frameN  # exact frame index
        mouse_5.tStart = t  # local t and not account for scr refresh
        mouse_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_5, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_5.started', t)
        mouse_5.status = STARTED
        mouse_5.mouseClock.reset()
        prevButtonState = mouse_5.getPressed()  # if button is down already this ISN'T a new click
    if mouse_5.status == STARTED:  # only update if started and not finished!
        buttons = mouse_5.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                x, y = mouse_5.getPos()
                mouse_5.x.append(x)
                mouse_5.y.append(y)
                buttons = mouse_5.getPressed()
                mouse_5.leftButton.append(buttons[0])
                mouse_5.midButton.append(buttons[1])
                mouse_5.rightButton.append(buttons[2])
                mouse_5.time.append(mouse_5.mouseClock.getTime())
                
                continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins_square_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins_square_1" ---
for thisComponent in ins_square_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_8.keys in ['', [], None]:  # No response was made
    key_resp_8.keys = None
thisExp.addData('key_resp_8.keys',key_resp_8.keys)
if key_resp_8.keys != None:  # we had a response
    thisExp.addData('key_resp_8.rt', key_resp_8.rt)
thisExp.nextEntry()
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_5.x', mouse_5.x)
thisExp.addData('mouse_5.y', mouse_5.y)
thisExp.addData('mouse_5.leftButton', mouse_5.leftButton)
thisExp.addData('mouse_5.midButton', mouse_5.midButton)
thisExp.addData('mouse_5.rightButton', mouse_5.rightButton)
thisExp.addData('mouse_5.time', mouse_5.time)
thisExp.nextEntry()
# the Routine "ins_square_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_square_2 = data.TrialHandler(nReps=how_many_prac_loops, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_square_2')
thisExp.addLoop(trials_square_2)  # add the loop to the experiment
thisTrials_square_2 = trials_square_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_square_2.rgb)
if thisTrials_square_2 != None:
    for paramName in thisTrials_square_2:
        exec('{} = thisTrials_square_2[paramName]'.format(paramName))

for thisTrials_square_2 in trials_square_2:
    currentLoop = trials_square_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_square_2.rgb)
    if thisTrials_square_2 != None:
        for paramName in thisTrials_square_2:
            exec('{} = thisTrials_square_2[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "square_helper" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_square_helper
    #here i set how many squares I will show to the participant
    thisloop_item_number = prac_loop_lengths[counter]
    
    #lets get the random squares
    random_square_names = random.sample(square_names, thisloop_item_number)
    
    #also set a second counter for the square-showing loop
    i = 0
    recall_counter = 0
    corr_square_cliqued = 0
    # keep track of which components have finished
    square_helperComponents = []
    for thisComponent in square_helperComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "square_helper" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in square_helperComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "square_helper" ---
    for thisComponent in square_helperComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_square_helper
    counter += 1
    # the Routine "square_helper" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "square_level" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    square_levelComponents = [text_level_1, text_level_2]
    for thisComponent in square_levelComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "square_level" ---
    while continueRoutine and routineTimer.getTime() < 2.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_level_1* updates
        if text_level_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_level_1.frameNStart = frameN  # exact frame index
            text_level_1.tStart = t  # local t and not account for scr refresh
            text_level_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_level_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_level_1.started')
            text_level_1.setAutoDraw(True)
        if text_level_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_level_1.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                text_level_1.tStop = t  # not accounting for scr refresh
                text_level_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_level_1.stopped')
                text_level_1.setAutoDraw(False)
        
        # *text_level_2* updates
        if text_level_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_level_2.frameNStart = frameN  # exact frame index
            text_level_2.tStart = t  # local t and not account for scr refresh
            text_level_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_level_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_level_2.started')
            text_level_2.setAutoDraw(True)
        if text_level_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_level_2.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                text_level_2.tStop = t  # not accounting for scr refresh
                text_level_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_level_2.stopped')
                text_level_2.setAutoDraw(False)
        if text_level_2.status == STARTED:  # only update if drawing
            text_level_2.setText(thisloop_item_number, log=False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in square_levelComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "square_level" ---
    for thisComponent in square_levelComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-2.000000)
    
    # set up handler to look after randomisation of conditions etc
    trials_square = data.TrialHandler(nReps=thisloop_item_number, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_square')
    thisExp.addLoop(trials_square)  # add the loop to the experiment
    thisTrials_square = trials_square.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_square.rgb)
    if thisTrials_square != None:
        for paramName in thisTrials_square:
            exec('{} = thisTrials_square[paramName]'.format(paramName))
    
    for thisTrials_square in trials_square:
        currentLoop = trials_square
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_square.rgb)
        if thisTrials_square != None:
            for paramName in thisTrials_square:
                exec('{} = thisTrials_square[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "square" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_square
        # set the square position to chosen_square[x]
        
        # get the x square number
        
        square_name_show = random_square_names[i]
        
        coordinates = square_dict[square_name_show]
        
        square_rand.setPos(coordinates) 
        # keep track of which components have finished
        squareComponents = [fixation2, grid, square_rand]
        for thisComponent in squareComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "square" ---
        while continueRoutine and routineTimer.getTime() < 1.15:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation2* updates
            if fixation2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                fixation2.frameNStart = frameN  # exact frame index
                fixation2.tStart = t  # local t and not account for scr refresh
                fixation2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fixation2.started')
                fixation2.setAutoDraw(True)
            if fixation2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation2.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation2.tStop = t  # not accounting for scr refresh
                    fixation2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fixation2.stopped')
                    fixation2.setAutoDraw(False)
            
            # *grid* updates
            if grid.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                grid.frameNStart = frameN  # exact frame index
                grid.tStart = t  # local t and not account for scr refresh
                grid.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'grid.started')
                grid.setAutoDraw(True)
            if grid.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid.tStartRefresh + 0.65-frameTolerance:
                    # keep track of stop time/frame for later
                    grid.tStop = t  # not accounting for scr refresh
                    grid.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'grid.stopped')
                    grid.setAutoDraw(False)
            
            # *square_rand* updates
            if square_rand.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                square_rand.frameNStart = frameN  # exact frame index
                square_rand.tStart = t  # local t and not account for scr refresh
                square_rand.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_rand, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_rand.started')
                square_rand.setAutoDraw(True)
            if square_rand.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_rand.tStartRefresh + 0.65-frameTolerance:
                    # keep track of stop time/frame for later
                    square_rand.tStop = t  # not accounting for scr refresh
                    square_rand.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_rand.stopped')
                    square_rand.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in squareComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "square" ---
        for thisComponent in squareComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_square
        i += 1
        
        thisExp.addData('squareShown', square_name_show) 
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.150000)
        thisExp.nextEntry()
        
    # completed thisloop_item_number repeats of 'trials_square'
    
    
    # set up handler to look after randomisation of conditions etc
    trials_square_rec = data.TrialHandler(nReps=thisloop_item_number, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_square_rec')
    thisExp.addLoop(trials_square_rec)  # add the loop to the experiment
    thisTrials_square_rec = trials_square_rec.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_square_rec.rgb)
    if thisTrials_square_rec != None:
        for paramName in thisTrials_square_rec:
            exec('{} = thisTrials_square_rec[paramName]'.format(paramName))
    
    for thisTrials_square_rec in trials_square_rec:
        currentLoop = trials_square_rec
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_square_rec.rgb)
        if thisTrials_square_rec != None:
            for paramName in thisTrials_square_rec:
                exec('{} = thisTrials_square_rec[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "square_rec" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # setup some python lists for storing info about the mouse
        mouse.x = []
        mouse.y = []
        mouse.leftButton = []
        mouse.midButton = []
        mouse.rightButton = []
        mouse.time = []
        mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        square_recComponents = [text_9, grid2, mouse, square_0, square_1, square_2, square_3, square_4, square_5, square_6, square_7, square_8, square_9, square_10, square_11, square_12, square_13, square_14, square_15]
        for thisComponent in square_recComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "square_rec" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_9* updates
            if text_9.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                text_9.frameNStart = frameN  # exact frame index
                text_9.tStart = t  # local t and not account for scr refresh
                text_9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_9.started')
                text_9.setAutoDraw(True)
            
            # *grid2* updates
            if grid2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                grid2.frameNStart = frameN  # exact frame index
                grid2.tStart = t  # local t and not account for scr refresh
                grid2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'grid2.started')
                grid2.setAutoDraw(True)
            # *mouse* updates
            if mouse.status == NOT_STARTED and t >= 0-frameTolerance:
                # keep track of start time/frame for later
                mouse.frameNStart = frameN  # exact frame index
                mouse.tStart = t  # local t and not account for scr refresh
                mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse.started', t)
                mouse.status = STARTED
                mouse.mouseClock.reset()
                prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
            if mouse.status == STARTED:  # only update if started and not finished!
                buttons = mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter([square_0, square_1, square_2, square_3, square_4, square_5, square_6, square_7, square_8, square_9, square_10, square_11, square_12, square_13, square_14, square_15])
                            clickableList = [square_0, square_1, square_2, square_3, square_4, square_5, square_6, square_7, square_8, square_9, square_10, square_11, square_12, square_13, square_14, square_15]
                        except:
                            clickableList = [[square_0, square_1, square_2, square_3, square_4, square_5, square_6, square_7, square_8, square_9, square_10, square_11, square_12, square_13, square_14, square_15]]
                        for obj in clickableList:
                            if obj.contains(mouse):
                                gotValidClick = True
                                mouse.clicked_name.append(obj.name)
                        x, y = mouse.getPos()
                        mouse.x.append(x)
                        mouse.y.append(y)
                        buttons = mouse.getPressed()
                        mouse.leftButton.append(buttons[0])
                        mouse.midButton.append(buttons[1])
                        mouse.rightButton.append(buttons[2])
                        mouse.time.append(mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # abort routine on response
            
            # *square_0* updates
            if square_0.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_0.frameNStart = frameN  # exact frame index
                square_0.tStart = t  # local t and not account for scr refresh
                square_0.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_0, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_0.started')
                square_0.setAutoDraw(True)
            
            # *square_1* updates
            if square_1.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_1.frameNStart = frameN  # exact frame index
                square_1.tStart = t  # local t and not account for scr refresh
                square_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_1.started')
                square_1.setAutoDraw(True)
            
            # *square_2* updates
            if square_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_2.frameNStart = frameN  # exact frame index
                square_2.tStart = t  # local t and not account for scr refresh
                square_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_2.started')
                square_2.setAutoDraw(True)
            
            # *square_3* updates
            if square_3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_3.frameNStart = frameN  # exact frame index
                square_3.tStart = t  # local t and not account for scr refresh
                square_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_3.started')
                square_3.setAutoDraw(True)
            
            # *square_4* updates
            if square_4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_4.frameNStart = frameN  # exact frame index
                square_4.tStart = t  # local t and not account for scr refresh
                square_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_4.started')
                square_4.setAutoDraw(True)
            
            # *square_5* updates
            if square_5.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_5.frameNStart = frameN  # exact frame index
                square_5.tStart = t  # local t and not account for scr refresh
                square_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_5.started')
                square_5.setAutoDraw(True)
            
            # *square_6* updates
            if square_6.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_6.frameNStart = frameN  # exact frame index
                square_6.tStart = t  # local t and not account for scr refresh
                square_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_6.started')
                square_6.setAutoDraw(True)
            
            # *square_7* updates
            if square_7.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_7.frameNStart = frameN  # exact frame index
                square_7.tStart = t  # local t and not account for scr refresh
                square_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_7, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_7.started')
                square_7.setAutoDraw(True)
            
            # *square_8* updates
            if square_8.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_8.frameNStart = frameN  # exact frame index
                square_8.tStart = t  # local t and not account for scr refresh
                square_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_8.started')
                square_8.setAutoDraw(True)
            
            # *square_9* updates
            if square_9.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_9.frameNStart = frameN  # exact frame index
                square_9.tStart = t  # local t and not account for scr refresh
                square_9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_9, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_9.started')
                square_9.setAutoDraw(True)
            
            # *square_10* updates
            if square_10.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_10.frameNStart = frameN  # exact frame index
                square_10.tStart = t  # local t and not account for scr refresh
                square_10.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_10, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_10.started')
                square_10.setAutoDraw(True)
            
            # *square_11* updates
            if square_11.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_11.frameNStart = frameN  # exact frame index
                square_11.tStart = t  # local t and not account for scr refresh
                square_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_11, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_11.started')
                square_11.setAutoDraw(True)
            
            # *square_12* updates
            if square_12.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_12.frameNStart = frameN  # exact frame index
                square_12.tStart = t  # local t and not account for scr refresh
                square_12.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_12, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_12.started')
                square_12.setAutoDraw(True)
            
            # *square_13* updates
            if square_13.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_13.frameNStart = frameN  # exact frame index
                square_13.tStart = t  # local t and not account for scr refresh
                square_13.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_13, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_13.started')
                square_13.setAutoDraw(True)
            
            # *square_14* updates
            if square_14.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_14.frameNStart = frameN  # exact frame index
                square_14.tStart = t  # local t and not account for scr refresh
                square_14.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_14, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_14.started')
                square_14.setAutoDraw(True)
            
            # *square_15* updates
            if square_15.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_15.frameNStart = frameN  # exact frame index
                square_15.tStart = t  # local t and not account for scr refresh
                square_15.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_15, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_15.started')
                square_15.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in square_recComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "square_rec" ---
        for thisComponent in square_recComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for trials_square_rec (TrialHandler)
        trials_square_rec.addData('mouse.x', mouse.x)
        trials_square_rec.addData('mouse.y', mouse.y)
        trials_square_rec.addData('mouse.leftButton', mouse.leftButton)
        trials_square_rec.addData('mouse.midButton', mouse.midButton)
        trials_square_rec.addData('mouse.rightButton', mouse.rightButton)
        trials_square_rec.addData('mouse.time', mouse.time)
        trials_square_rec.addData('mouse.clicked_name', mouse.clicked_name)
        # the Routine "square_rec" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "square_rec_g_r" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_square_rec_g_r
        
        if mouse.clicked_name[0] == "square_0" and random_square_names[recall_counter] == "square_0":
            corr_square_cliqued += 1
            square_16.color = "#006400"
        elif mouse.clicked_name[0] == "square_1" and random_square_names[recall_counter] == "square_1":
            corr_square_cliqued += 1
            square_17.color = "#006400"
        elif mouse.clicked_name[0] == "square_2" and random_square_names[recall_counter] == "square_2":
            corr_square_cliqued += 1
            square_18.color = "#006400"
        elif mouse.clicked_name[0] == "square_3" and random_square_names[recall_counter] == "square_3":
            corr_square_cliqued += 1
            square_19.color = "#006400"
        elif mouse.clicked_name[0] == "square_4" and random_square_names[recall_counter] == "square_4":
            corr_square_cliqued += 1
            square_20.color = "#006400"
        elif mouse.clicked_name[0] == "square_5" and random_square_names[recall_counter] == "square_5":
            corr_square_cliqued += 1
            square_21.color = "#006400"
        elif mouse.clicked_name[0] == "square_6" and random_square_names[recall_counter] == "square_6":
            corr_square_cliqued += 1
            square_22.color = "#006400"
        elif mouse.clicked_name[0] == "square_7"and random_square_names[recall_counter] == "square_7":
            corr_square_cliqued += 1
            square_23.color = "#006400"
        elif mouse.clicked_name[0] == "square_8" and random_square_names[recall_counter] == "square_8":
            corr_square_cliqued += 1
            square_24.color = "#006400"
        elif mouse.clicked_name[0] == "square_9" and random_square_names[recall_counter] == "square_9":
            corr_square_cliqued += 1
            square_25.color = "#006400"
        elif mouse.clicked_name[0] == "square_10" and random_square_names[recall_counter] == "square_10":
            corr_square_cliqued += 1
            square_26.color = "#006400"
        elif mouse.clicked_name[0] == "square_11" and random_square_names[recall_counter] == "square_11":
            corr_square_cliqued += 1
            square_27.color = "#006400"
        elif mouse.clicked_name[0] == "square_12" and random_square_names[recall_counter] == "square_12":
            corr_square_cliqued += 1
            square_28.color = "#006400"
        elif mouse.clicked_name[0] == "square_13" and random_square_names[recall_counter] == "square_13":
            corr_square_cliqued += 1
            square_29.color = "#006400"
        elif mouse.clicked_name[0] == "square_14" and random_square_names[recall_counter] == "square_14":
            corr_square_cliqued += 1
            square_30.color = "#006400"
        elif mouse.clicked_name[0] == "square_15" and random_square_names[recall_counter] == "square_15":
            corr_square_cliqued += 1
            square_31.color = "#006400"
        else:
            square_16.color = "#ff0000";
            square_17.color = "#ff0000";
            square_18.color = "#ff0000";
            square_19.color = "#ff0000";
            square_20.color = "#ff0000";
            square_21.color = "#ff0000";
            square_22.color = "#ff0000";
            square_23.color = "#ff0000";
            square_24.color = "#ff0000";
            square_25.color = "#ff0000";
            square_26.color = "#ff0000";
            square_27.color = "#ff0000";
            square_28.color = "#ff0000";
            square_29.color = "#ff0000";
            square_30.color = "#ff0000";
            square_31.color = "#ff0000";
        # keep track of which components have finished
        square_rec_g_rComponents = [text_10, grid3, square_16, square_17, square_18, square_19, square_20, square_21, square_22, square_23, square_24, square_25, square_26, square_27, square_28, square_29, square_30, square_31]
        for thisComponent in square_rec_g_rComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "square_rec_g_r" ---
        while continueRoutine and routineTimer.getTime() < 0.2:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_10* updates
            if text_10.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                text_10.frameNStart = frameN  # exact frame index
                text_10.tStart = t  # local t and not account for scr refresh
                text_10.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_10.started')
                text_10.setAutoDraw(True)
            if text_10.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_10.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_10.tStop = t  # not accounting for scr refresh
                    text_10.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_10.stopped')
                    text_10.setAutoDraw(False)
            
            # *grid3* updates
            if grid3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                grid3.frameNStart = frameN  # exact frame index
                grid3.tStart = t  # local t and not account for scr refresh
                grid3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'grid3.started')
                grid3.setAutoDraw(True)
            if grid3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid3.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    grid3.tStop = t  # not accounting for scr refresh
                    grid3.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'grid3.stopped')
                    grid3.setAutoDraw(False)
            
            # *square_16* updates
            if square_16.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_16.frameNStart = frameN  # exact frame index
                square_16.tStart = t  # local t and not account for scr refresh
                square_16.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_16, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_16.started')
                square_16.setAutoDraw(True)
            if square_16.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_16.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_16.tStop = t  # not accounting for scr refresh
                    square_16.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_16.stopped')
                    square_16.setAutoDraw(False)
            
            # *square_17* updates
            if square_17.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_17.frameNStart = frameN  # exact frame index
                square_17.tStart = t  # local t and not account for scr refresh
                square_17.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_17, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_17.started')
                square_17.setAutoDraw(True)
            if square_17.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_17.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_17.tStop = t  # not accounting for scr refresh
                    square_17.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_17.stopped')
                    square_17.setAutoDraw(False)
            
            # *square_18* updates
            if square_18.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_18.frameNStart = frameN  # exact frame index
                square_18.tStart = t  # local t and not account for scr refresh
                square_18.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_18, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_18.started')
                square_18.setAutoDraw(True)
            if square_18.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_18.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_18.tStop = t  # not accounting for scr refresh
                    square_18.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_18.stopped')
                    square_18.setAutoDraw(False)
            
            # *square_19* updates
            if square_19.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_19.frameNStart = frameN  # exact frame index
                square_19.tStart = t  # local t and not account for scr refresh
                square_19.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_19, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_19.started')
                square_19.setAutoDraw(True)
            if square_19.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_19.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_19.tStop = t  # not accounting for scr refresh
                    square_19.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_19.stopped')
                    square_19.setAutoDraw(False)
            
            # *square_20* updates
            if square_20.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_20.frameNStart = frameN  # exact frame index
                square_20.tStart = t  # local t and not account for scr refresh
                square_20.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_20, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_20.started')
                square_20.setAutoDraw(True)
            if square_20.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_20.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_20.tStop = t  # not accounting for scr refresh
                    square_20.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_20.stopped')
                    square_20.setAutoDraw(False)
            
            # *square_21* updates
            if square_21.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_21.frameNStart = frameN  # exact frame index
                square_21.tStart = t  # local t and not account for scr refresh
                square_21.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_21, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_21.started')
                square_21.setAutoDraw(True)
            if square_21.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_21.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_21.tStop = t  # not accounting for scr refresh
                    square_21.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_21.stopped')
                    square_21.setAutoDraw(False)
            
            # *square_22* updates
            if square_22.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_22.frameNStart = frameN  # exact frame index
                square_22.tStart = t  # local t and not account for scr refresh
                square_22.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_22, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_22.started')
                square_22.setAutoDraw(True)
            if square_22.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_22.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_22.tStop = t  # not accounting for scr refresh
                    square_22.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_22.stopped')
                    square_22.setAutoDraw(False)
            
            # *square_23* updates
            if square_23.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_23.frameNStart = frameN  # exact frame index
                square_23.tStart = t  # local t and not account for scr refresh
                square_23.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_23, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_23.started')
                square_23.setAutoDraw(True)
            if square_23.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_23.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_23.tStop = t  # not accounting for scr refresh
                    square_23.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_23.stopped')
                    square_23.setAutoDraw(False)
            
            # *square_24* updates
            if square_24.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_24.frameNStart = frameN  # exact frame index
                square_24.tStart = t  # local t and not account for scr refresh
                square_24.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_24, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_24.started')
                square_24.setAutoDraw(True)
            if square_24.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_24.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_24.tStop = t  # not accounting for scr refresh
                    square_24.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_24.stopped')
                    square_24.setAutoDraw(False)
            
            # *square_25* updates
            if square_25.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_25.frameNStart = frameN  # exact frame index
                square_25.tStart = t  # local t and not account for scr refresh
                square_25.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_25, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_25.started')
                square_25.setAutoDraw(True)
            if square_25.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_25.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_25.tStop = t  # not accounting for scr refresh
                    square_25.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_25.stopped')
                    square_25.setAutoDraw(False)
            
            # *square_26* updates
            if square_26.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_26.frameNStart = frameN  # exact frame index
                square_26.tStart = t  # local t and not account for scr refresh
                square_26.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_26, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_26.started')
                square_26.setAutoDraw(True)
            if square_26.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_26.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_26.tStop = t  # not accounting for scr refresh
                    square_26.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_26.stopped')
                    square_26.setAutoDraw(False)
            
            # *square_27* updates
            if square_27.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_27.frameNStart = frameN  # exact frame index
                square_27.tStart = t  # local t and not account for scr refresh
                square_27.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_27, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_27.started')
                square_27.setAutoDraw(True)
            if square_27.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_27.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_27.tStop = t  # not accounting for scr refresh
                    square_27.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_27.stopped')
                    square_27.setAutoDraw(False)
            
            # *square_28* updates
            if square_28.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_28.frameNStart = frameN  # exact frame index
                square_28.tStart = t  # local t and not account for scr refresh
                square_28.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_28, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_28.started')
                square_28.setAutoDraw(True)
            if square_28.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_28.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_28.tStop = t  # not accounting for scr refresh
                    square_28.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_28.stopped')
                    square_28.setAutoDraw(False)
            
            # *square_29* updates
            if square_29.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_29.frameNStart = frameN  # exact frame index
                square_29.tStart = t  # local t and not account for scr refresh
                square_29.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_29, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_29.started')
                square_29.setAutoDraw(True)
            if square_29.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_29.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_29.tStop = t  # not accounting for scr refresh
                    square_29.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_29.stopped')
                    square_29.setAutoDraw(False)
            
            # *square_30* updates
            if square_30.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_30.frameNStart = frameN  # exact frame index
                square_30.tStart = t  # local t and not account for scr refresh
                square_30.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_30, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_30.started')
                square_30.setAutoDraw(True)
            if square_30.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_30.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_30.tStop = t  # not accounting for scr refresh
                    square_30.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_30.stopped')
                    square_30.setAutoDraw(False)
            
            # *square_31* updates
            if square_31.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_31.frameNStart = frameN  # exact frame index
                square_31.tStart = t  # local t and not account for scr refresh
                square_31.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_31, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_31.started')
                square_31.setAutoDraw(True)
            if square_31.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_31.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_31.tStop = t  # not accounting for scr refresh
                    square_31.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_31.stopped')
                    square_31.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in square_rec_g_rComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "square_rec_g_r" ---
        for thisComponent in square_rec_g_rComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_square_rec_g_r
        for i in range(16):
            exec(f"square_{i+16}.color = '#ff8080'")
            exec(f"square_{i+16}.lineColor = '#ffffff'")
        
        recall_counter += 1
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.200000)
        thisExp.nextEntry()
        
    # completed thisloop_item_number repeats of 'trials_square_rec'
    
    
    # --- Prepare to start Routine "next_set" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_next_square_set
    # Showing the participant how many squares he found from total
    result_squares_text = "Eredményed: %d / %d"%(corr_square_cliqued ,thisloop_item_number)
    
    # Setting up the counter that breaks the loop if too many mistakes made
    if (corr_square_cliqued == thisloop_item_number):
        loop_breaker = 0
    else:
        loop_breaker += 1
    
    # Changing text depending on practice part or experiment part
    if (counter <= 2):
        end_prac_text = "Kattints, vagy nyomd meg a SPACE-t a következő gyakorlókörhöz!"
    elif (counter == 3):
        end_prac_text = "Szép! Most következzenek az éles körök!\n\nPróbálj meg minél magasabb szintre jutni!\n\nA folytatáshoz kattints, vagy nyomd meg a SPACE-t "
    else:
        end_prac_text = "SPACE/Katt"
    
    # setup some python lists for storing info about the mouse_2
    mouse_2.x = []
    mouse_2.y = []
    mouse_2.leftButton = []
    mouse_2.midButton = []
    mouse_2.rightButton = []
    mouse_2.time = []
    gotValidClick = False  # until a click is received
    key_resp_13.keys = []
    key_resp_13.rt = []
    _key_resp_13_allKeys = []
    # keep track of which components have finished
    next_setComponents = [text_result_squares, text_end_prac, mouse_2, key_resp_13]
    for thisComponent in next_setComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "next_set" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_result_squares* updates
        if text_result_squares.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_result_squares.frameNStart = frameN  # exact frame index
            text_result_squares.tStart = t  # local t and not account for scr refresh
            text_result_squares.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_result_squares, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_result_squares.started')
            text_result_squares.setAutoDraw(True)
        if text_result_squares.status == STARTED:  # only update if drawing
            text_result_squares.setText(result_squares_text, log=False)
        
        # *text_end_prac* updates
        if text_end_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_end_prac.frameNStart = frameN  # exact frame index
            text_end_prac.tStart = t  # local t and not account for scr refresh
            text_end_prac.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_end_prac, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_end_prac.started')
            text_end_prac.setAutoDraw(True)
        if text_end_prac.status == STARTED:  # only update if drawing
            text_end_prac.setText(end_prac_text, log=False)
        # *mouse_2* updates
        if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_2.frameNStart = frameN  # exact frame index
            mouse_2.tStart = t  # local t and not account for scr refresh
            mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_2.started', t)
            mouse_2.status = STARTED
            mouse_2.mouseClock.reset()
            prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
        if mouse_2.status == STARTED:  # only update if started and not finished!
            buttons = mouse_2.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    x, y = mouse_2.getPos()
                    mouse_2.x.append(x)
                    mouse_2.y.append(y)
                    buttons = mouse_2.getPressed()
                    mouse_2.leftButton.append(buttons[0])
                    mouse_2.midButton.append(buttons[1])
                    mouse_2.rightButton.append(buttons[2])
                    mouse_2.time.append(mouse_2.mouseClock.getTime())
                    
                    continueRoutine = False  # abort routine on response
        
        # *key_resp_13* updates
        waitOnFlip = False
        if key_resp_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_13.frameNStart = frameN  # exact frame index
            key_resp_13.tStart = t  # local t and not account for scr refresh
            key_resp_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_13.started')
            key_resp_13.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_13.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_13.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_13.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_13.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_13_allKeys.extend(theseKeys)
            if len(_key_resp_13_allKeys):
                key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
                key_resp_13.rt = _key_resp_13_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in next_setComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "next_set" ---
    for thisComponent in next_setComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_next_square_set
    # If participants makes 3 mistakes in a row, finish this section
    
    thisExp.addData('number_of_correct_squares_clicked', corr_square_cliqued) 
    thisExp.addData('total_squares_clicked', thisloop_item_number)
    
    if (loop_breaker == 3):
        trials_square_2.finished = True
    
    # store data for trials_square_2 (TrialHandler)
    trials_square_2.addData('mouse_2.x', mouse_2.x)
    trials_square_2.addData('mouse_2.y', mouse_2.y)
    trials_square_2.addData('mouse_2.leftButton', mouse_2.leftButton)
    trials_square_2.addData('mouse_2.midButton', mouse_2.midButton)
    trials_square_2.addData('mouse_2.rightButton', mouse_2.rightButton)
    trials_square_2.addData('mouse_2.time', mouse_2.time)
    # check responses
    if key_resp_13.keys in ['', [], None]:  # No response was made
        key_resp_13.keys = None
    trials_square_2.addData('key_resp_13.keys',key_resp_13.keys)
    if key_resp_13.keys != None:  # we had a response
        trials_square_2.addData('key_resp_13.rt', key_resp_13.rt)
    # the Routine "next_set" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed how_many_prac_loops repeats of 'trials_square_2'


# --- Prepare to start Routine "ins_square_end" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code
square_end_text = "Szép eredmény!\nA legmagasabb szint, amelyre eljutottál: %d"%(thisloop_item_number)


# Setting all the important variables back to 0
loop_breaker = 0
thisloop_item_number = 0
counter = 0
i = 0
recall_counter = 0
corr_square_cliqued = 0
random_square_names = []
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# setup some python lists for storing info about the mouse_3
mouse_3.x = []
mouse_3.y = []
mouse_3.leftButton = []
mouse_3.midButton = []
mouse_3.rightButton = []
mouse_3.time = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
ins_square_endComponents = [text_square_end, text_11, key_resp_9, mouse_3]
for thisComponent in ins_square_endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins_square_end" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_square_end* updates
    if text_square_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_square_end.frameNStart = frameN  # exact frame index
        text_square_end.tStart = t  # local t and not account for scr refresh
        text_square_end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_square_end, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_square_end.started')
        text_square_end.setAutoDraw(True)
    if text_square_end.status == STARTED:  # only update if drawing
        text_square_end.setText(square_end_text, log=False)
    
    # *text_11* updates
    if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_11.frameNStart = frameN  # exact frame index
        text_11.tStart = t  # local t and not account for scr refresh
        text_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_11.started')
        text_11.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_9.started')
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # *mouse_3* updates
    if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_3.frameNStart = frameN  # exact frame index
        mouse_3.tStart = t  # local t and not account for scr refresh
        mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_3.started', t)
        mouse_3.status = STARTED
        mouse_3.mouseClock.reset()
        prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
    if mouse_3.status == STARTED:  # only update if started and not finished!
        buttons = mouse_3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                x, y = mouse_3.getPos()
                mouse_3.x.append(x)
                mouse_3.y.append(y)
                buttons = mouse_3.getPressed()
                mouse_3.leftButton.append(buttons[0])
                mouse_3.midButton.append(buttons[1])
                mouse_3.rightButton.append(buttons[2])
                mouse_3.time.append(mouse_3.mouseClock.getTime())
                
                continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins_square_endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins_square_end" ---
for thisComponent in ins_square_endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_9.keys in ['', [], None]:  # No response was made
    key_resp_9.keys = None
thisExp.addData('key_resp_9.keys',key_resp_9.keys)
if key_resp_9.keys != None:  # we had a response
    thisExp.addData('key_resp_9.rt', key_resp_9.rt)
thisExp.nextEntry()
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_3.x', mouse_3.x)
thisExp.addData('mouse_3.y', mouse_3.y)
thisExp.addData('mouse_3.leftButton', mouse_3.leftButton)
thisExp.addData('mouse_3.midButton', mouse_3.midButton)
thisExp.addData('mouse_3.rightButton', mouse_3.rightButton)
thisExp.addData('mouse_3.time', mouse_3.time)
thisExp.nextEntry()
# the Routine "ins_square_end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ins_sym_1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# setup some python lists for storing info about the mouse_6
mouse_6.x = []
mouse_6.y = []
mouse_6.leftButton = []
mouse_6.midButton = []
mouse_6.rightButton = []
mouse_6.time = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
ins_sym_1Components = [text_2, key_resp_2, mouse_6]
for thisComponent in ins_sym_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins_sym_1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_2.started')
        text_2.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_2.started')
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # *mouse_6* updates
    if mouse_6.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_6.frameNStart = frameN  # exact frame index
        mouse_6.tStart = t  # local t and not account for scr refresh
        mouse_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_6, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_6.started', t)
        mouse_6.status = STARTED
        mouse_6.mouseClock.reset()
        prevButtonState = mouse_6.getPressed()  # if button is down already this ISN'T a new click
    if mouse_6.status == STARTED:  # only update if started and not finished!
        buttons = mouse_6.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                x, y = mouse_6.getPos()
                mouse_6.x.append(x)
                mouse_6.y.append(y)
                buttons = mouse_6.getPressed()
                mouse_6.leftButton.append(buttons[0])
                mouse_6.midButton.append(buttons[1])
                mouse_6.rightButton.append(buttons[2])
                mouse_6.time.append(mouse_6.mouseClock.getTime())
                
                continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins_sym_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins_sym_1" ---
for thisComponent in ins_sym_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.nextEntry()
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_6.x', mouse_6.x)
thisExp.addData('mouse_6.y', mouse_6.y)
thisExp.addData('mouse_6.leftButton', mouse_6.leftButton)
thisExp.addData('mouse_6.midButton', mouse_6.midButton)
thisExp.addData('mouse_6.rightButton', mouse_6.rightButton)
thisExp.addData('mouse_6.time', mouse_6.time)
thisExp.nextEntry()
# the Routine "ins_sym_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ins_sym_2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
image_sym.setImage('resources/example1.JPG')
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
ins_sym_2Components = [text_3, image_sym, text_sym_nsym, key_resp_3]
for thisComponent in ins_sym_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins_sym_2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_3.started')
        text_3.setAutoDraw(True)
    
    # *image_sym* updates
    if image_sym.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_sym.frameNStart = frameN  # exact frame index
        image_sym.tStart = t  # local t and not account for scr refresh
        image_sym.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_sym, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'image_sym.started')
        image_sym.setAutoDraw(True)
    
    # *text_sym_nsym* updates
    if text_sym_nsym.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_sym_nsym.frameNStart = frameN  # exact frame index
        text_sym_nsym.tStart = t  # local t and not account for scr refresh
        text_sym_nsym.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_sym_nsym, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_sym_nsym.started')
        text_sym_nsym.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_3.started')
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['left'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins_sym_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins_sym_2" ---
for thisComponent in ins_sym_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.nextEntry()
# the Routine "ins_sym_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ins_sym_3" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
image.setImage('resources/example2.JPG')
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
ins_sym_3Components = [text_4, image, text_sym_nsym_2, key_resp_4]
for thisComponent in ins_sym_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins_sym_3" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_4.started')
        text_4.setAutoDraw(True)
    
    # *image* updates
    if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image.frameNStart = frameN  # exact frame index
        image.tStart = t  # local t and not account for scr refresh
        image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'image.started')
        image.setAutoDraw(True)
    
    # *text_sym_nsym_2* updates
    if text_sym_nsym_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_sym_nsym_2.frameNStart = frameN  # exact frame index
        text_sym_nsym_2.tStart = t  # local t and not account for scr refresh
        text_sym_nsym_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_sym_nsym_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_sym_nsym_2.started')
        text_sym_nsym_2.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_4.started')
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['right'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins_sym_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins_sym_3" ---
for thisComponent in ins_sym_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys = None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.nextEntry()
# the Routine "ins_sym_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ins2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
ins2Components = [text_5, key_resp_5]
for thisComponent in ins2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_5.started')
        text_5.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_5.started')
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins2" ---
for thisComponent in ins2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_5.keys in ['', [], None]:  # No response was made
    key_resp_5.keys = None
thisExp.addData('key_resp_5.keys',key_resp_5.keys)
if key_resp_5.keys != None:  # we had a response
    thisExp.addData('key_resp_5.rt', key_resp_5.rt)
thisExp.nextEntry()
# the Routine "ins2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_prac2 = data.TrialHandler(nReps=3.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_prac2')
thisExp.addLoop(trials_prac2)  # add the loop to the experiment
thisTrials_prac2 = trials_prac2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_prac2.rgb)
if thisTrials_prac2 != None:
    for paramName in thisTrials_prac2:
        exec('{} = thisTrials_prac2[paramName]'.format(paramName))

for thisTrials_prac2 in trials_prac2:
    currentLoop = trials_prac2
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_prac2.rgb)
    if thisTrials_prac2 != None:
        for paramName in thisTrials_prac2:
            exec('{} = thisTrials_prac2[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials_prac = data.TrialHandler(nReps=pracSymmTrialNumber, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_prac')
    thisExp.addLoop(trials_prac)  # add the loop to the experiment
    thisTrials_prac = trials_prac.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_prac.rgb)
    if thisTrials_prac != None:
        for paramName in thisTrials_prac:
            exec('{} = thisTrials_prac[paramName]'.format(paramName))
    
    for thisTrials_prac in trials_prac:
        currentLoop = trials_prac
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_prac.rgb)
        if thisTrials_prac != None:
            for paramName in thisTrials_prac:
                exec('{} = thisTrials_prac[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "prac_sym" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_prac_sym
        timerPracSym.reset();
        picture = selected_images[total_trials];
        key_resp_6.keys = []
        key_resp_6.rt = []
        _key_resp_6_allKeys = []
        # keep track of which components have finished
        prac_symComponents = [fixation, image_2, text_sym_nsym_3, text_countdown, text_how_many_correct, key_resp_6]
        for thisComponent in prac_symComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "prac_sym" ---
        while continueRoutine and routineTimer.getTime() < 2.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from code_prac_sym
            countDownText = "%.1f"%(timerPracSym.getTime())
            
            
            
            # *fixation* updates
            if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation.frameNStart = frameN  # exact frame index
                fixation.tStart = t  # local t and not account for scr refresh
                fixation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fixation.started')
                fixation.setAutoDraw(True)
            if fixation.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation.tStop = t  # not accounting for scr refresh
                    fixation.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fixation.stopped')
                    fixation.setAutoDraw(False)
            
            # *image_2* updates
            if image_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                image_2.frameNStart = frameN  # exact frame index
                image_2.tStart = t  # local t and not account for scr refresh
                image_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_2.started')
                image_2.setAutoDraw(True)
            if image_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_2.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    image_2.tStop = t  # not accounting for scr refresh
                    image_2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_2.stopped')
                    image_2.setAutoDraw(False)
            if image_2.status == STARTED:  # only update if drawing
                image_2.setImage(picture, log=False)
            
            # *text_sym_nsym_3* updates
            if text_sym_nsym_3.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                text_sym_nsym_3.frameNStart = frameN  # exact frame index
                text_sym_nsym_3.tStart = t  # local t and not account for scr refresh
                text_sym_nsym_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_sym_nsym_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_sym_nsym_3.started')
                text_sym_nsym_3.setAutoDraw(True)
            if text_sym_nsym_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_sym_nsym_3.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_sym_nsym_3.tStop = t  # not accounting for scr refresh
                    text_sym_nsym_3.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_sym_nsym_3.stopped')
                    text_sym_nsym_3.setAutoDraw(False)
            
            # *text_countdown* updates
            if text_countdown.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                text_countdown.frameNStart = frameN  # exact frame index
                text_countdown.tStart = t  # local t and not account for scr refresh
                text_countdown.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_countdown, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_countdown.started')
                text_countdown.setAutoDraw(True)
            if text_countdown.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_countdown.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_countdown.tStop = t  # not accounting for scr refresh
                    text_countdown.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_countdown.stopped')
                    text_countdown.setAutoDraw(False)
            if text_countdown.status == STARTED:  # only update if drawing
                text_countdown.setText(countDownText, log=False)
            
            # *text_how_many_correct* updates
            if text_how_many_correct.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                text_how_many_correct.frameNStart = frameN  # exact frame index
                text_how_many_correct.tStart = t  # local t and not account for scr refresh
                text_how_many_correct.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_how_many_correct, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_how_many_correct.started')
                text_how_many_correct.setAutoDraw(True)
            if text_how_many_correct.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_how_many_correct.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_how_many_correct.tStop = t  # not accounting for scr refresh
                    text_how_many_correct.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_how_many_correct.stopped')
                    text_how_many_correct.setAutoDraw(False)
            if text_how_many_correct.status == STARTED:  # only update if drawing
                text_how_many_correct.setText(correct_total_text, log=False)
            
            # *key_resp_6* updates
            waitOnFlip = False
            if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                key_resp_6.frameNStart = frameN  # exact frame index
                key_resp_6.tStart = t  # local t and not account for scr refresh
                key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_6.started')
                key_resp_6.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_6.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_6.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_6.tStop = t  # not accounting for scr refresh
                    key_resp_6.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_6.stopped')
                    key_resp_6.status = FINISHED
            if key_resp_6.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_6.getKeys(keyList=['left','right'], waitRelease=False)
                _key_resp_6_allKeys.extend(theseKeys)
                if len(_key_resp_6_allKeys):
                    key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
                    key_resp_6.rt = _key_resp_6_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in prac_symComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prac_sym" ---
        for thisComponent in prac_symComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_prac_sym
        countDownText = ""
        
        
        # Define how much time is remaining
        remainingTime = timerPracSym.getTime()
        # Define if the symmetry answer is correct or not.
        sym_corr = ''
        
        if selected_images[total_trials] in sym_images:
                sym_corr = "left"
        else:
                sym_corr = "right"
                
        
        # If correct choice has been made under 2 seconds, plus one correct answer
        
        if remainingTime <= 0:
            correct_answers += 0
            maskColor = redMask
        else: 
            if (key_resp_6.keys == sym_corr):
        
                correct_answers += 1
                maskColor = greenMask
            else:
                correct_answers += 0
                maskColor = redMask
        
        total_trials += 1
        correct_total_text = "Helyes válaszok:\n %d / %d" % (correct_answers, total_trials)
        
        # check responses
        if key_resp_6.keys in ['', [], None]:  # No response was made
            key_resp_6.keys = None
        trials_prac.addData('key_resp_6.keys',key_resp_6.keys)
        if key_resp_6.keys != None:  # we had a response
            trials_prac.addData('key_resp_6.rt', key_resp_6.rt)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-2.500000)
        
        # --- Prepare to start Routine "prac_sym_g_r" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # keep track of which components have finished
        prac_sym_g_rComponents = [image_3, image_4]
        for thisComponent in prac_sym_g_rComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "prac_sym_g_r" ---
        while continueRoutine and routineTimer.getTime() < 0.2:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_3* updates
            if image_3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_3.frameNStart = frameN  # exact frame index
                image_3.tStart = t  # local t and not account for scr refresh
                image_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_3.started')
                image_3.setAutoDraw(True)
            if image_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_3.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    image_3.tStop = t  # not accounting for scr refresh
                    image_3.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_3.stopped')
                    image_3.setAutoDraw(False)
            if image_3.status == STARTED:  # only update if drawing
                image_3.setImage(picture, log=False)
            
            # *image_4* updates
            if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_4.frameNStart = frameN  # exact frame index
                image_4.tStart = t  # local t and not account for scr refresh
                image_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_4.started')
                image_4.setAutoDraw(True)
            if image_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_4.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    image_4.tStop = t  # not accounting for scr refresh
                    image_4.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_4.stopped')
                    image_4.setAutoDraw(False)
            if image_4.status == STARTED:  # only update if drawing
                image_4.setImage(maskColor, log=False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in prac_sym_g_rComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prac_sym_g_r" ---
        for thisComponent in prac_sym_g_rComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_prac_sym_g_r
        thisExp.addData('SymmAnswer', sym_corr) 
        maskColor = ""
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.200000)
        thisExp.nextEntry()
        
    # completed pracSymmTrialNumber repeats of 'trials_prac'
    
    
    # --- Prepare to start Routine "prac_sym_fb" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_prac_sym_fb
    if total_trials == 0:
        accuracyPercent = 0
    else:
        accuracyPercent = (correct_answers/ total_trials) * 100
    
    if accuracyPercent >= 85:
        text_score.color = "#006400"
        
    else:
        text_score.color = "#800000"
    
    accuracyText = "%.1f" %(accuracyPercent) + "%"
    
    if prac_sym_loop_nr <= 1:
        prac_fb = 'A kísérlet sikeres teljesítéséhez majd legalább 85%-ot kell elérned!\n\nHa újra kívánsz gyakorolni, nyomd meg a BAL vagy a JOBB gombot. Összesen kétszer gyakorolhatod ezt a feladatrészt.\n\nHA a következő részre ugranál, nyomd meg a SPACE gombot'
    else:
        prac_fb = 'A kísérlet sikeres teljesítéséhez majd legalább 85%-ot kell elérned!\n\n Elfogytak a gyakorlási lehetőségeid\nTovább: SPACE'
    
    
    text_score.setText(accuracyText)
    text_7.setText(prac_fb)
    key_resp_7.keys = []
    key_resp_7.rt = []
    _key_resp_7_allKeys = []
    # keep track of which components have finished
    prac_sym_fbComponents = [text_6, text_score, text_7, key_resp_7]
    for thisComponent in prac_sym_fbComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "prac_sym_fb" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_6* updates
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_6.started')
            text_6.setAutoDraw(True)
        
        # *text_score* updates
        if text_score.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_score.frameNStart = frameN  # exact frame index
            text_score.tStart = t  # local t and not account for scr refresh
            text_score.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_score, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_score.started')
            text_score.setAutoDraw(True)
        
        # *text_7* updates
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_7.started')
            text_7.setAutoDraw(True)
        
        # *key_resp_7* updates
        waitOnFlip = False
        if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_7.frameNStart = frameN  # exact frame index
            key_resp_7.tStart = t  # local t and not account for scr refresh
            key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_7.started')
            key_resp_7.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_7.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_7.getKeys(keyList=['left','right','space'], waitRelease=False)
            _key_resp_7_allKeys.extend(theseKeys)
            if len(_key_resp_7_allKeys):
                key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
                key_resp_7.rt = _key_resp_7_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in prac_sym_fbComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "prac_sym_fb" ---
    for thisComponent in prac_sym_fbComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_prac_sym_fb
    prac_sym_loop_nr += 1
    total_trials = 0
    correct_answers = 0
    accuracyText = ""
    correct_total_text = ""
    
    if (key_resp_7.keys == "space"):
        trials_prac2.finished = True
        
    
    # check responses
    if key_resp_7.keys in ['', [], None]:  # No response was made
        key_resp_7.keys = None
    trials_prac2.addData('key_resp_7.keys',key_resp_7.keys)
    if key_resp_7.keys != None:  # we had a response
        trials_prac2.addData('key_resp_7.rt', key_resp_7.rt)
    # the Routine "prac_sym_fb" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 3.0 repeats of 'trials_prac2'


# --- Prepare to start Routine "ins_both" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
ins_bothComponents = [text_12, key_resp_10]
for thisComponent in ins_bothComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins_both" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_12* updates
    if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_12.frameNStart = frameN  # exact frame index
        text_12.tStart = t  # local t and not account for scr refresh
        text_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_12.started')
        text_12.setAutoDraw(True)
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_10.frameNStart = frameN  # exact frame index
        key_resp_10.tStart = t  # local t and not account for scr refresh
        key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_10.started')
        key_resp_10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_10.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_10.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins_bothComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins_both" ---
for thisComponent in ins_bothComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_10.keys in ['', [], None]:  # No response was made
    key_resp_10.keys = None
thisExp.addData('key_resp_10.keys',key_resp_10.keys)
if key_resp_10.keys != None:  # we had a response
    thisExp.addData('key_resp_10.rt', key_resp_10.rt)
thisExp.nextEntry()
# the Routine "ins_both" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_both = data.TrialHandler(nReps=how_many_prac_loops, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_both')
thisExp.addLoop(trials_both)  # add the loop to the experiment
thisTrials_both = trials_both.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_both.rgb)
if thisTrials_both != None:
    for paramName in thisTrials_both:
        exec('{} = thisTrials_both[paramName]'.format(paramName))

for thisTrials_both in trials_both:
    currentLoop = trials_both
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_both.rgb)
    if thisTrials_both != None:
        for paramName in thisTrials_both:
            exec('{} = thisTrials_both[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "both_helper" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_both_helper
    #here i set how many squares I will show to the participant
    thisloop_item_number = prac_loop_lengths[counter]
    
    #lets get the random squares
    random_square_names = random.sample(square_names_both, thisloop_item_number)
    
    #also set a second counter for the square-showing loop
    i = 0
    recall_counter = 0
    corr_square_cliqued = 0
    
    
    
    #creating function that chooses x amount of sym and nsym images
    
    def select_images_both(non_sym_images, sym_images, thisloop_item_number):
        if thisloop_item_number % 2 == 0:
            half_trials = int(thisloop_item_number / 2)
            # Select random samples from sym and nsym images
            selected_non_sym_images = random.sample(non_sym_images, half_trials)
            selected_sym_images = random.sample(sym_images, half_trials)
            selected_images_both = selected_non_sym_images + selected_sym_images
    
            random.shuffle(selected_images)
        else:
            half_trials = int((thisloop_item_number + 1) / 2)
            #same here
            selected_non_sym_images = random.sample(non_sym_images, half_trials)
            selected_sym_images = random.sample(sym_images, half_trials)
            selected_images_both = selected_non_sym_images + selected_sym_images
            #but we delete one
            random.shuffle(selected_images_both)
            selected_images_both.pop()
        return selected_images_both
        
    selected_images_both = select_images_both(non_sym_images, sym_images, thisloop_item_number)
        
    
    # keep track of which components have finished
    both_helperComponents = []
    for thisComponent in both_helperComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "both_helper" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in both_helperComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "both_helper" ---
    for thisComponent in both_helperComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_both_helper
    counter += 1
    # the Routine "both_helper" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "both_level" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    both_levelComponents = [text_both_level_1, text_both_level_2]
    for thisComponent in both_levelComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "both_level" ---
    while continueRoutine and routineTimer.getTime() < 2.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_both_level_1* updates
        if text_both_level_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_both_level_1.frameNStart = frameN  # exact frame index
            text_both_level_1.tStart = t  # local t and not account for scr refresh
            text_both_level_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_both_level_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_both_level_1.started')
            text_both_level_1.setAutoDraw(True)
        if text_both_level_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_both_level_1.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                text_both_level_1.tStop = t  # not accounting for scr refresh
                text_both_level_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_both_level_1.stopped')
                text_both_level_1.setAutoDraw(False)
        
        # *text_both_level_2* updates
        if text_both_level_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_both_level_2.frameNStart = frameN  # exact frame index
            text_both_level_2.tStart = t  # local t and not account for scr refresh
            text_both_level_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_both_level_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_both_level_2.started')
            text_both_level_2.setAutoDraw(True)
        if text_both_level_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_both_level_2.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                text_both_level_2.tStop = t  # not accounting for scr refresh
                text_both_level_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_both_level_2.stopped')
                text_both_level_2.setAutoDraw(False)
        if text_both_level_2.status == STARTED:  # only update if drawing
            text_both_level_2.setText(thisloop_item_number, log=False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in both_levelComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "both_level" ---
    for thisComponent in both_levelComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-2.000000)
    
    # set up handler to look after randomisation of conditions etc
    trials_both_square = data.TrialHandler(nReps=thisloop_item_number, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_both_square')
    thisExp.addLoop(trials_both_square)  # add the loop to the experiment
    thisTrials_both_square = trials_both_square.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_both_square.rgb)
    if thisTrials_both_square != None:
        for paramName in thisTrials_both_square:
            exec('{} = thisTrials_both_square[paramName]'.format(paramName))
    
    for thisTrials_both_square in trials_both_square:
        currentLoop = trials_both_square
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_both_square.rgb)
        if thisTrials_both_square != None:
            for paramName in thisTrials_both_square:
                exec('{} = thisTrials_both_square[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "both_square" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_both_square
        # set the square position to chosen_square[x]
        
        # get the x square number
        
        square_name_show = random_square_names[i]
        
        coordinates = square_dict_both[square_name_show]
        
        square_rand_both.setPos(coordinates) 
        # keep track of which components have finished
        both_squareComponents = [fixation_both, grid_both, square_rand_both]
        for thisComponent in both_squareComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "both_square" ---
        while continueRoutine and routineTimer.getTime() < 1.15:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation_both* updates
            if fixation_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                fixation_both.frameNStart = frameN  # exact frame index
                fixation_both.tStart = t  # local t and not account for scr refresh
                fixation_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fixation_both.started')
                fixation_both.setAutoDraw(True)
            if fixation_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation_both.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation_both.tStop = t  # not accounting for scr refresh
                    fixation_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fixation_both.stopped')
                    fixation_both.setAutoDraw(False)
            
            # *grid_both* updates
            if grid_both.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                grid_both.frameNStart = frameN  # exact frame index
                grid_both.tStart = t  # local t and not account for scr refresh
                grid_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'grid_both.started')
                grid_both.setAutoDraw(True)
            if grid_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid_both.tStartRefresh + 0.65-frameTolerance:
                    # keep track of stop time/frame for later
                    grid_both.tStop = t  # not accounting for scr refresh
                    grid_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'grid_both.stopped')
                    grid_both.setAutoDraw(False)
            
            # *square_rand_both* updates
            if square_rand_both.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                square_rand_both.frameNStart = frameN  # exact frame index
                square_rand_both.tStart = t  # local t and not account for scr refresh
                square_rand_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_rand_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_rand_both.started')
                square_rand_both.setAutoDraw(True)
            if square_rand_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_rand_both.tStartRefresh + 0.65-frameTolerance:
                    # keep track of stop time/frame for later
                    square_rand_both.tStop = t  # not accounting for scr refresh
                    square_rand_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_rand_both.stopped')
                    square_rand_both.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in both_squareComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "both_square" ---
        for thisComponent in both_squareComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_both_square
        i += 1
        
        thisExp.addData('squareShown', square_name_show) 
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.150000)
        
        # --- Prepare to start Routine "both_sym" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_prac_sym_both
        timerPracSym.reset()
        picture = selected_images_both[total_trials]
        
        
        
        
        key_resp_6_both.keys = []
        key_resp_6_both.rt = []
        _key_resp_6_both_allKeys = []
        # keep track of which components have finished
        both_symComponents = [fixation_both_2, image_2_both, text_sym_nsym_3_both, text_countdown_both, text_how_many_correct_both, key_resp_6_both]
        for thisComponent in both_symComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "both_sym" ---
        while continueRoutine and routineTimer.getTime() < 2.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from code_prac_sym_both
            countDownText = "%.1f"%(timerPracSym.getTime())
            
            
            
            # *fixation_both_2* updates
            if fixation_both_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation_both_2.frameNStart = frameN  # exact frame index
                fixation_both_2.tStart = t  # local t and not account for scr refresh
                fixation_both_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation_both_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fixation_both_2.started')
                fixation_both_2.setAutoDraw(True)
            if fixation_both_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation_both_2.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation_both_2.tStop = t  # not accounting for scr refresh
                    fixation_both_2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fixation_both_2.stopped')
                    fixation_both_2.setAutoDraw(False)
            
            # *image_2_both* updates
            if image_2_both.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                image_2_both.frameNStart = frameN  # exact frame index
                image_2_both.tStart = t  # local t and not account for scr refresh
                image_2_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_2_both.started')
                image_2_both.setAutoDraw(True)
            if image_2_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_2_both.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    image_2_both.tStop = t  # not accounting for scr refresh
                    image_2_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_2_both.stopped')
                    image_2_both.setAutoDraw(False)
            if image_2_both.status == STARTED:  # only update if drawing
                image_2_both.setImage(picture, log=False)
            
            # *text_sym_nsym_3_both* updates
            if text_sym_nsym_3_both.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                text_sym_nsym_3_both.frameNStart = frameN  # exact frame index
                text_sym_nsym_3_both.tStart = t  # local t and not account for scr refresh
                text_sym_nsym_3_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_sym_nsym_3_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_sym_nsym_3_both.started')
                text_sym_nsym_3_both.setAutoDraw(True)
            if text_sym_nsym_3_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_sym_nsym_3_both.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_sym_nsym_3_both.tStop = t  # not accounting for scr refresh
                    text_sym_nsym_3_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_sym_nsym_3_both.stopped')
                    text_sym_nsym_3_both.setAutoDraw(False)
            
            # *text_countdown_both* updates
            if text_countdown_both.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                text_countdown_both.frameNStart = frameN  # exact frame index
                text_countdown_both.tStart = t  # local t and not account for scr refresh
                text_countdown_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_countdown_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_countdown_both.started')
                text_countdown_both.setAutoDraw(True)
            if text_countdown_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_countdown_both.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_countdown_both.tStop = t  # not accounting for scr refresh
                    text_countdown_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_countdown_both.stopped')
                    text_countdown_both.setAutoDraw(False)
            if text_countdown_both.status == STARTED:  # only update if drawing
                text_countdown_both.setText(countDownText, log=False)
            
            # *text_how_many_correct_both* updates
            if text_how_many_correct_both.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                text_how_many_correct_both.frameNStart = frameN  # exact frame index
                text_how_many_correct_both.tStart = t  # local t and not account for scr refresh
                text_how_many_correct_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_how_many_correct_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_how_many_correct_both.started')
                text_how_many_correct_both.setAutoDraw(True)
            if text_how_many_correct_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_how_many_correct_both.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_how_many_correct_both.tStop = t  # not accounting for scr refresh
                    text_how_many_correct_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_how_many_correct_both.stopped')
                    text_how_many_correct_both.setAutoDraw(False)
            if text_how_many_correct_both.status == STARTED:  # only update if drawing
                text_how_many_correct_both.setText(correct_total_text, log=False)
            
            # *key_resp_6_both* updates
            waitOnFlip = False
            if key_resp_6_both.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                key_resp_6_both.frameNStart = frameN  # exact frame index
                key_resp_6_both.tStart = t  # local t and not account for scr refresh
                key_resp_6_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_6_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_6_both.started')
                key_resp_6_both.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_6_both.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_6_both.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_6_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_6_both.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_6_both.tStop = t  # not accounting for scr refresh
                    key_resp_6_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_6_both.stopped')
                    key_resp_6_both.status = FINISHED
            if key_resp_6_both.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_6_both.getKeys(keyList=['left','right'], waitRelease=False)
                _key_resp_6_both_allKeys.extend(theseKeys)
                if len(_key_resp_6_both_allKeys):
                    key_resp_6_both.keys = _key_resp_6_both_allKeys[-1].name  # just the last key pressed
                    key_resp_6_both.rt = _key_resp_6_both_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in both_symComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "both_sym" ---
        for thisComponent in both_symComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_prac_sym_both
        countDownText = ""
        
        # Define how much time is remaining
        remainingTime = timerPracSym.getTime()
        
        # Define if the symmetry answer is correct or not.
        sym_corr = ''
        
        if selected_images_both[total_trials] in sym_images:
                sym_corr = "left"
        else:
                sym_corr = "right"
                
        
        # If correct choice has been made under 2 seconds, plus one correct answer
        
        if remainingTime <= 0:
            correct_answers += 0
            maskColor = redMask
        else: 
            if (key_resp_6_both.keys == sym_corr):
        
                correct_answers += 1
                overall_symm_corr += 1
                maskColor = greenMask
            else:
                correct_answers += 0
                maskColor = redMask
        
        total_trials += 1
        overall_symm += 1
        correct_total_text = "Helyes válaszok:\n %d / %d" % (correct_answers, total_trials)
        
        # check responses
        if key_resp_6_both.keys in ['', [], None]:  # No response was made
            key_resp_6_both.keys = None
        trials_both_square.addData('key_resp_6_both.keys',key_resp_6_both.keys)
        if key_resp_6_both.keys != None:  # we had a response
            trials_both_square.addData('key_resp_6_both.rt', key_resp_6_both.rt)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-2.500000)
        
        # --- Prepare to start Routine "both_sym_g_r" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # keep track of which components have finished
        both_sym_g_rComponents = [image_3_both, image_4_both]
        for thisComponent in both_sym_g_rComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "both_sym_g_r" ---
        while continueRoutine and routineTimer.getTime() < 0.2:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_3_both* updates
            if image_3_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_3_both.frameNStart = frameN  # exact frame index
                image_3_both.tStart = t  # local t and not account for scr refresh
                image_3_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_3_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_3_both.started')
                image_3_both.setAutoDraw(True)
            if image_3_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_3_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    image_3_both.tStop = t  # not accounting for scr refresh
                    image_3_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_3_both.stopped')
                    image_3_both.setAutoDraw(False)
            if image_3_both.status == STARTED:  # only update if drawing
                image_3_both.setImage(picture, log=False)
            
            # *image_4_both* updates
            if image_4_both.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_4_both.frameNStart = frameN  # exact frame index
                image_4_both.tStart = t  # local t and not account for scr refresh
                image_4_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_4_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_4_both.started')
                image_4_both.setAutoDraw(True)
            if image_4_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_4_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    image_4_both.tStop = t  # not accounting for scr refresh
                    image_4_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_4_both.stopped')
                    image_4_both.setAutoDraw(False)
            if image_4_both.status == STARTED:  # only update if drawing
                image_4_both.setImage(maskColor, log=False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in both_sym_g_rComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "both_sym_g_r" ---
        for thisComponent in both_sym_g_rComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_prac_sym_g_r_both
        thisExp.addData('SymmAnswer', sym_corr) 
        maskColor = ""
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.200000)
        thisExp.nextEntry()
        
    # completed thisloop_item_number repeats of 'trials_both_square'
    
    
    # set up handler to look after randomisation of conditions etc
    trials_both_square_rec = data.TrialHandler(nReps=thisloop_item_number, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_both_square_rec')
    thisExp.addLoop(trials_both_square_rec)  # add the loop to the experiment
    thisTrials_both_square_rec = trials_both_square_rec.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_both_square_rec.rgb)
    if thisTrials_both_square_rec != None:
        for paramName in thisTrials_both_square_rec:
            exec('{} = thisTrials_both_square_rec[paramName]'.format(paramName))
    
    for thisTrials_both_square_rec in trials_both_square_rec:
        currentLoop = trials_both_square_rec
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_both_square_rec.rgb)
        if thisTrials_both_square_rec != None:
            for paramName in thisTrials_both_square_rec:
                exec('{} = thisTrials_both_square_rec[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "both_square_rec" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # setup some python lists for storing info about the mouse_both
        mouse_both.x = []
        mouse_both.y = []
        mouse_both.leftButton = []
        mouse_both.midButton = []
        mouse_both.rightButton = []
        mouse_both.time = []
        mouse_both.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        both_square_recComponents = [text9_both, grid2_both, mouse_both, square_0_both, square_1_both, square_2_both, square_3_both, square_4_both, square_5_both, square_6_both, square_7_both, square_8_both, square_9_both, square_10_both, square_11_both, square_12_both, square_13_both, square_14_both, square_15_both]
        for thisComponent in both_square_recComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "both_square_rec" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text9_both* updates
            if text9_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                text9_both.frameNStart = frameN  # exact frame index
                text9_both.tStart = t  # local t and not account for scr refresh
                text9_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text9_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text9_both.started')
                text9_both.setAutoDraw(True)
            
            # *grid2_both* updates
            if grid2_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                grid2_both.frameNStart = frameN  # exact frame index
                grid2_both.tStart = t  # local t and not account for scr refresh
                grid2_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid2_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'grid2_both.started')
                grid2_both.setAutoDraw(True)
            # *mouse_both* updates
            if mouse_both.status == NOT_STARTED and t >= 0-frameTolerance:
                # keep track of start time/frame for later
                mouse_both.frameNStart = frameN  # exact frame index
                mouse_both.tStart = t  # local t and not account for scr refresh
                mouse_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse_both.started', t)
                mouse_both.status = STARTED
                mouse_both.mouseClock.reset()
                prevButtonState = mouse_both.getPressed()  # if button is down already this ISN'T a new click
            if mouse_both.status == STARTED:  # only update if started and not finished!
                buttons = mouse_both.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter([square_0_both, square_1_both, square_2_both, square_3_both, square_4_both, square_5_both, square_6_both, square_7_both, square_8_both, square_9_both, square_10_both, square_11_both, square_12_both, square_13_both, square_14_both, square_15_both])
                            clickableList = [square_0_both, square_1_both, square_2_both, square_3_both, square_4_both, square_5_both, square_6_both, square_7_both, square_8_both, square_9_both, square_10_both, square_11_both, square_12_both, square_13_both, square_14_both, square_15_both]
                        except:
                            clickableList = [[square_0_both, square_1_both, square_2_both, square_3_both, square_4_both, square_5_both, square_6_both, square_7_both, square_8_both, square_9_both, square_10_both, square_11_both, square_12_both, square_13_both, square_14_both, square_15_both]]
                        for obj in clickableList:
                            if obj.contains(mouse_both):
                                gotValidClick = True
                                mouse_both.clicked_name.append(obj.name)
                        x, y = mouse_both.getPos()
                        mouse_both.x.append(x)
                        mouse_both.y.append(y)
                        buttons = mouse_both.getPressed()
                        mouse_both.leftButton.append(buttons[0])
                        mouse_both.midButton.append(buttons[1])
                        mouse_both.rightButton.append(buttons[2])
                        mouse_both.time.append(mouse_both.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # abort routine on response
            
            # *square_0_both* updates
            if square_0_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_0_both.frameNStart = frameN  # exact frame index
                square_0_both.tStart = t  # local t and not account for scr refresh
                square_0_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_0_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_0_both.started')
                square_0_both.setAutoDraw(True)
            
            # *square_1_both* updates
            if square_1_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_1_both.frameNStart = frameN  # exact frame index
                square_1_both.tStart = t  # local t and not account for scr refresh
                square_1_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_1_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_1_both.started')
                square_1_both.setAutoDraw(True)
            
            # *square_2_both* updates
            if square_2_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_2_both.frameNStart = frameN  # exact frame index
                square_2_both.tStart = t  # local t and not account for scr refresh
                square_2_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_2_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_2_both.started')
                square_2_both.setAutoDraw(True)
            
            # *square_3_both* updates
            if square_3_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_3_both.frameNStart = frameN  # exact frame index
                square_3_both.tStart = t  # local t and not account for scr refresh
                square_3_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_3_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_3_both.started')
                square_3_both.setAutoDraw(True)
            
            # *square_4_both* updates
            if square_4_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_4_both.frameNStart = frameN  # exact frame index
                square_4_both.tStart = t  # local t and not account for scr refresh
                square_4_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_4_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_4_both.started')
                square_4_both.setAutoDraw(True)
            
            # *square_5_both* updates
            if square_5_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_5_both.frameNStart = frameN  # exact frame index
                square_5_both.tStart = t  # local t and not account for scr refresh
                square_5_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_5_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_5_both.started')
                square_5_both.setAutoDraw(True)
            
            # *square_6_both* updates
            if square_6_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_6_both.frameNStart = frameN  # exact frame index
                square_6_both.tStart = t  # local t and not account for scr refresh
                square_6_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_6_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_6_both.started')
                square_6_both.setAutoDraw(True)
            
            # *square_7_both* updates
            if square_7_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_7_both.frameNStart = frameN  # exact frame index
                square_7_both.tStart = t  # local t and not account for scr refresh
                square_7_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_7_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_7_both.started')
                square_7_both.setAutoDraw(True)
            
            # *square_8_both* updates
            if square_8_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_8_both.frameNStart = frameN  # exact frame index
                square_8_both.tStart = t  # local t and not account for scr refresh
                square_8_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_8_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_8_both.started')
                square_8_both.setAutoDraw(True)
            
            # *square_9_both* updates
            if square_9_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_9_both.frameNStart = frameN  # exact frame index
                square_9_both.tStart = t  # local t and not account for scr refresh
                square_9_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_9_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_9_both.started')
                square_9_both.setAutoDraw(True)
            
            # *square_10_both* updates
            if square_10_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_10_both.frameNStart = frameN  # exact frame index
                square_10_both.tStart = t  # local t and not account for scr refresh
                square_10_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_10_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_10_both.started')
                square_10_both.setAutoDraw(True)
            
            # *square_11_both* updates
            if square_11_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_11_both.frameNStart = frameN  # exact frame index
                square_11_both.tStart = t  # local t and not account for scr refresh
                square_11_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_11_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_11_both.started')
                square_11_both.setAutoDraw(True)
            
            # *square_12_both* updates
            if square_12_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_12_both.frameNStart = frameN  # exact frame index
                square_12_both.tStart = t  # local t and not account for scr refresh
                square_12_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_12_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_12_both.started')
                square_12_both.setAutoDraw(True)
            
            # *square_13_both* updates
            if square_13_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_13_both.frameNStart = frameN  # exact frame index
                square_13_both.tStart = t  # local t and not account for scr refresh
                square_13_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_13_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_13_both.started')
                square_13_both.setAutoDraw(True)
            
            # *square_14_both* updates
            if square_14_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_14_both.frameNStart = frameN  # exact frame index
                square_14_both.tStart = t  # local t and not account for scr refresh
                square_14_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_14_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_14_both.started')
                square_14_both.setAutoDraw(True)
            
            # *square_15_both* updates
            if square_15_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_15_both.frameNStart = frameN  # exact frame index
                square_15_both.tStart = t  # local t and not account for scr refresh
                square_15_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_15_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_15_both.started')
                square_15_both.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in both_square_recComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "both_square_rec" ---
        for thisComponent in both_square_recComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for trials_both_square_rec (TrialHandler)
        trials_both_square_rec.addData('mouse_both.x', mouse_both.x)
        trials_both_square_rec.addData('mouse_both.y', mouse_both.y)
        trials_both_square_rec.addData('mouse_both.leftButton', mouse_both.leftButton)
        trials_both_square_rec.addData('mouse_both.midButton', mouse_both.midButton)
        trials_both_square_rec.addData('mouse_both.rightButton', mouse_both.rightButton)
        trials_both_square_rec.addData('mouse_both.time', mouse_both.time)
        trials_both_square_rec.addData('mouse_both.clicked_name', mouse_both.clicked_name)
        # the Routine "both_square_rec" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "both_square_rec_g_r" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_square_rec_g_r_both
        
        if mouse_both.clicked_name[0] == "square_0_both" and random_square_names[recall_counter] == "square_0_both":
            corr_square_cliqued += 1
            square_16_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_1_both" and random_square_names[recall_counter] == "square_1_both":
            corr_square_cliqued += 1
            square_17_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_2_both" and random_square_names[recall_counter] == "square_2_both":
            corr_square_cliqued += 1
            square_18_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_3_both" and random_square_names[recall_counter] == "square_3_both":
            corr_square_cliqued += 1
            square_19_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_4_both" and random_square_names[recall_counter] == "square_4_both":
            corr_square_cliqued += 1
            square_20_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_5_both" and random_square_names[recall_counter] == "square_5_both":
            corr_square_cliqued += 1
            square_21_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_6_both" and random_square_names[recall_counter] == "square_6_both":
            corr_square_cliqued += 1
            square_22_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_7_both"and random_square_names[recall_counter] == "square_7_both":
            corr_square_cliqued += 1
            square_23_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_8_both" and random_square_names[recall_counter] == "square_8_both":
            corr_square_cliqued += 1
            square_24_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_9_both" and random_square_names[recall_counter] == "square_9_both":
            corr_square_cliqued += 1
            square_25_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_10_both" and random_square_names[recall_counter] == "square_10_both":
            corr_square_cliqued += 1
            square_26_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_11_both" and random_square_names[recall_counter] == "square_11_both":
            corr_square_cliqued += 1
            square_27_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_12_both" and random_square_names[recall_counter] == "square_12_both":
            corr_square_cliqued += 1
            square_28_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_13_both" and random_square_names[recall_counter] == "square_13_both":
            corr_square_cliqued += 1
            square_29_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_14_both" and random_square_names[recall_counter] == "square_14_both":
            corr_square_cliqued += 1
            square_30_both.color = "#006400"
        elif mouse_both.clicked_name[0] == "square_15_both" and random_square_names[recall_counter] == "square_15_both":
            corr_square_cliqued += 1
            square_31_both.color = "#006400"
        else:
            for i in range(16):
                exec(f"square_{i+16}_both.color = '#ff0000'")
        
        # keep track of which components have finished
        both_square_rec_g_rComponents = [text_10_both, grid3_both, square_16_both, square_17_both, square_18_both, square_19_both, square_20_both, square_21_both, square_22_both, square_23_both, square_24_both, square_25_both, square_26_both, square_27_both, square_28_both, square_29_both, square_30_both, square_31_both]
        for thisComponent in both_square_rec_g_rComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "both_square_rec_g_r" ---
        while continueRoutine and routineTimer.getTime() < 0.2:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_10_both* updates
            if text_10_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                text_10_both.frameNStart = frameN  # exact frame index
                text_10_both.tStart = t  # local t and not account for scr refresh
                text_10_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_10_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_10_both.started')
                text_10_both.setAutoDraw(True)
            if text_10_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_10_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    text_10_both.tStop = t  # not accounting for scr refresh
                    text_10_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_10_both.stopped')
                    text_10_both.setAutoDraw(False)
            
            # *grid3_both* updates
            if grid3_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                grid3_both.frameNStart = frameN  # exact frame index
                grid3_both.tStart = t  # local t and not account for scr refresh
                grid3_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(grid3_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'grid3_both.started')
                grid3_both.setAutoDraw(True)
            if grid3_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > grid3_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    grid3_both.tStop = t  # not accounting for scr refresh
                    grid3_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'grid3_both.stopped')
                    grid3_both.setAutoDraw(False)
            
            # *square_16_both* updates
            if square_16_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_16_both.frameNStart = frameN  # exact frame index
                square_16_both.tStart = t  # local t and not account for scr refresh
                square_16_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_16_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_16_both.started')
                square_16_both.setAutoDraw(True)
            if square_16_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_16_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_16_both.tStop = t  # not accounting for scr refresh
                    square_16_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_16_both.stopped')
                    square_16_both.setAutoDraw(False)
            
            # *square_17_both* updates
            if square_17_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_17_both.frameNStart = frameN  # exact frame index
                square_17_both.tStart = t  # local t and not account for scr refresh
                square_17_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_17_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_17_both.started')
                square_17_both.setAutoDraw(True)
            if square_17_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_17_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_17_both.tStop = t  # not accounting for scr refresh
                    square_17_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_17_both.stopped')
                    square_17_both.setAutoDraw(False)
            
            # *square_18_both* updates
            if square_18_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_18_both.frameNStart = frameN  # exact frame index
                square_18_both.tStart = t  # local t and not account for scr refresh
                square_18_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_18_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_18_both.started')
                square_18_both.setAutoDraw(True)
            if square_18_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_18_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_18_both.tStop = t  # not accounting for scr refresh
                    square_18_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_18_both.stopped')
                    square_18_both.setAutoDraw(False)
            
            # *square_19_both* updates
            if square_19_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_19_both.frameNStart = frameN  # exact frame index
                square_19_both.tStart = t  # local t and not account for scr refresh
                square_19_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_19_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_19_both.started')
                square_19_both.setAutoDraw(True)
            if square_19_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_19_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_19_both.tStop = t  # not accounting for scr refresh
                    square_19_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_19_both.stopped')
                    square_19_both.setAutoDraw(False)
            
            # *square_20_both* updates
            if square_20_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_20_both.frameNStart = frameN  # exact frame index
                square_20_both.tStart = t  # local t and not account for scr refresh
                square_20_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_20_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_20_both.started')
                square_20_both.setAutoDraw(True)
            if square_20_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_20_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_20_both.tStop = t  # not accounting for scr refresh
                    square_20_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_20_both.stopped')
                    square_20_both.setAutoDraw(False)
            
            # *square_21_both* updates
            if square_21_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_21_both.frameNStart = frameN  # exact frame index
                square_21_both.tStart = t  # local t and not account for scr refresh
                square_21_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_21_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_21_both.started')
                square_21_both.setAutoDraw(True)
            if square_21_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_21_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_21_both.tStop = t  # not accounting for scr refresh
                    square_21_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_21_both.stopped')
                    square_21_both.setAutoDraw(False)
            
            # *square_22_both* updates
            if square_22_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_22_both.frameNStart = frameN  # exact frame index
                square_22_both.tStart = t  # local t and not account for scr refresh
                square_22_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_22_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_22_both.started')
                square_22_both.setAutoDraw(True)
            if square_22_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_22_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_22_both.tStop = t  # not accounting for scr refresh
                    square_22_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_22_both.stopped')
                    square_22_both.setAutoDraw(False)
            
            # *square_23_both* updates
            if square_23_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_23_both.frameNStart = frameN  # exact frame index
                square_23_both.tStart = t  # local t and not account for scr refresh
                square_23_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_23_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_23_both.started')
                square_23_both.setAutoDraw(True)
            if square_23_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_23_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_23_both.tStop = t  # not accounting for scr refresh
                    square_23_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_23_both.stopped')
                    square_23_both.setAutoDraw(False)
            
            # *square_24_both* updates
            if square_24_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_24_both.frameNStart = frameN  # exact frame index
                square_24_both.tStart = t  # local t and not account for scr refresh
                square_24_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_24_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_24_both.started')
                square_24_both.setAutoDraw(True)
            if square_24_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_24_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_24_both.tStop = t  # not accounting for scr refresh
                    square_24_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_24_both.stopped')
                    square_24_both.setAutoDraw(False)
            
            # *square_25_both* updates
            if square_25_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_25_both.frameNStart = frameN  # exact frame index
                square_25_both.tStart = t  # local t and not account for scr refresh
                square_25_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_25_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_25_both.started')
                square_25_both.setAutoDraw(True)
            if square_25_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_25_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_25_both.tStop = t  # not accounting for scr refresh
                    square_25_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_25_both.stopped')
                    square_25_both.setAutoDraw(False)
            
            # *square_26_both* updates
            if square_26_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_26_both.frameNStart = frameN  # exact frame index
                square_26_both.tStart = t  # local t and not account for scr refresh
                square_26_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_26_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_26_both.started')
                square_26_both.setAutoDraw(True)
            if square_26_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_26_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_26_both.tStop = t  # not accounting for scr refresh
                    square_26_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_26_both.stopped')
                    square_26_both.setAutoDraw(False)
            
            # *square_27_both* updates
            if square_27_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_27_both.frameNStart = frameN  # exact frame index
                square_27_both.tStart = t  # local t and not account for scr refresh
                square_27_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_27_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_27_both.started')
                square_27_both.setAutoDraw(True)
            if square_27_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_27_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_27_both.tStop = t  # not accounting for scr refresh
                    square_27_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_27_both.stopped')
                    square_27_both.setAutoDraw(False)
            
            # *square_28_both* updates
            if square_28_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_28_both.frameNStart = frameN  # exact frame index
                square_28_both.tStart = t  # local t and not account for scr refresh
                square_28_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_28_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_28_both.started')
                square_28_both.setAutoDraw(True)
            if square_28_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_28_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_28_both.tStop = t  # not accounting for scr refresh
                    square_28_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_28_both.stopped')
                    square_28_both.setAutoDraw(False)
            
            # *square_29_both* updates
            if square_29_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_29_both.frameNStart = frameN  # exact frame index
                square_29_both.tStart = t  # local t and not account for scr refresh
                square_29_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_29_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_29_both.started')
                square_29_both.setAutoDraw(True)
            if square_29_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_29_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_29_both.tStop = t  # not accounting for scr refresh
                    square_29_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_29_both.stopped')
                    square_29_both.setAutoDraw(False)
            
            # *square_30_both* updates
            if square_30_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_30_both.frameNStart = frameN  # exact frame index
                square_30_both.tStart = t  # local t and not account for scr refresh
                square_30_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_30_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_30_both.started')
                square_30_both.setAutoDraw(True)
            if square_30_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_30_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_30_both.tStop = t  # not accounting for scr refresh
                    square_30_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_30_both.stopped')
                    square_30_both.setAutoDraw(False)
            
            # *square_31_both* updates
            if square_31_both.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                square_31_both.frameNStart = frameN  # exact frame index
                square_31_both.tStart = t  # local t and not account for scr refresh
                square_31_both.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(square_31_both, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'square_31_both.started')
                square_31_both.setAutoDraw(True)
            if square_31_both.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > square_31_both.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    square_31_both.tStop = t  # not accounting for scr refresh
                    square_31_both.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'square_31_both.stopped')
                    square_31_both.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in both_square_rec_g_rComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "both_square_rec_g_r" ---
        for thisComponent in both_square_rec_g_rComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_square_rec_g_r_both
        for i in range(16):
            exec(f"square_{i+16}_both.color = '#ff8080'")
            exec(f"square_{i+16}_both.lineColor = '#ffffff'")
        
        recall_counter += 1
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.200000)
        thisExp.nextEntry()
        
    # completed thisloop_item_number repeats of 'trials_both_square_rec'
    
    
    # --- Prepare to start Routine "both_next_set" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_next_square_set_both
    # Showing the participant how many squares he found from total
    result_squares_text = "Eredményed: %d / %d"%(corr_square_cliqued ,thisloop_item_number)
    
    # Setting up the counter that breaks the loop if too many mistakes made
    if (corr_square_cliqued == thisloop_item_number):
        loop_breaker = 0
    else:
        loop_breaker += 1
    
    # Changing text depending on practice part or experiment part
    if (counter <= 2):
        end_prac_text = "Kattints, vagy nyomd meg a SPACE-t a következő gyakorlókörhöz!"
    elif (counter == 3):
        end_prac_text = "Szép! Most következzenek az éles körök!\n\nPróbálj meg minél magasabb szintre jutni!\n\nA folytatáshoz kattints, vagy nyomd meg a SPACE-t "
    else:
        end_prac_text = "SPACE"
    
    key_resp_12.keys = []
    key_resp_12.rt = []
    _key_resp_12_allKeys = []
    # keep track of which components have finished
    both_next_setComponents = [text_result_square_both, text_end_prac_both, key_resp_12]
    for thisComponent in both_next_setComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "both_next_set" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_result_square_both* updates
        if text_result_square_both.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_result_square_both.frameNStart = frameN  # exact frame index
            text_result_square_both.tStart = t  # local t and not account for scr refresh
            text_result_square_both.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_result_square_both, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_result_square_both.started')
            text_result_square_both.setAutoDraw(True)
        if text_result_square_both.status == STARTED:  # only update if drawing
            text_result_square_both.setText(result_squares_text, log=False)
        
        # *text_end_prac_both* updates
        if text_end_prac_both.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_end_prac_both.frameNStart = frameN  # exact frame index
            text_end_prac_both.tStart = t  # local t and not account for scr refresh
            text_end_prac_both.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_end_prac_both, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_end_prac_both.started')
            text_end_prac_both.setAutoDraw(True)
        if text_end_prac_both.status == STARTED:  # only update if drawing
            text_end_prac_both.setText(end_prac_text, log=False)
        
        # *key_resp_12* updates
        waitOnFlip = False
        if key_resp_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_12.frameNStart = frameN  # exact frame index
            key_resp_12.tStart = t  # local t and not account for scr refresh
            key_resp_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_12.started')
            key_resp_12.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_12.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_12.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_12.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_12.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_12_allKeys.extend(theseKeys)
            if len(_key_resp_12_allKeys):
                key_resp_12.keys = _key_resp_12_allKeys[-1].name  # just the last key pressed
                key_resp_12.rt = _key_resp_12_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in both_next_setComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "both_next_set" ---
    for thisComponent in both_next_setComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_next_square_set_both
    
    total_trials = 0
    correct_answers = 0
    accuracyText = ""
    correct_total_text = ""
    
    # If participants makes 3 mistakes in a row, finish this section
    if (loop_breaker == 3):
        trials_both.finished = True
    
    # Export responses of participant
    thisExp.addData('number_of_correct_squares_clicked', corr_square_cliqued) 
    thisExp.addData('total_squares_clicked', thisloop_item_number)
    # check responses
    if key_resp_12.keys in ['', [], None]:  # No response was made
        key_resp_12.keys = None
    trials_both.addData('key_resp_12.keys',key_resp_12.keys)
    if key_resp_12.keys != None:  # we had a response
        trials_both.addData('key_resp_12.rt', key_resp_12.rt)
    # the Routine "both_next_set" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed how_many_prac_loops repeats of 'trials_both'


# --- Prepare to start Routine "both_end" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_both
square_end_text = "Szép eredmény!\nA legmagasabb szint, amelyre eljutottál: %d."%(thisloop_item_number)
overall_accuracy_both = "A szimmetriadöntésekben elért arányod: %d / %d"%(overall_symm_corr, overall_symm)

if overall_symm == 0:
    accuracyPercent = 0
else:
    accuracyPercent = (overall_symm_corr/ overall_symm) * 100

if accuracyPercent >= 85:
    text_accuracy_both.color = "#006400"
    text_if_less_accuracy = ""
    
else:
    text_accuracy_both.color = "#800000"
    
    text_if_less_accuracy = "A kutatás szempontjából akkor nem számít sikeresnek a kísérlet elvégzése, ha az összesített arány (azaz minden alkalom arányának átlaga) nem éri el a 85%-ot. Ezért ettől még sikeresen teljesítheted a kísérletet, de legközelebb jobban figyel a függőleges döntési feladatra!"

accuracyText = "%.1f" %(accuracyPercent) + "%"




key_resp_11.keys = []
key_resp_11.rt = []
_key_resp_11_allKeys = []
# setup some python lists for storing info about the mouse_7
mouse_7.x = []
mouse_7.y = []
mouse_7.leftButton = []
mouse_7.midButton = []
mouse_7.rightButton = []
mouse_7.time = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
both_endComponents = [text_square_end_both, text_14, text_accuracy_both, text_less_acc, key_resp_11, mouse_7]
for thisComponent in both_endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "both_end" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_square_end_both* updates
    if text_square_end_both.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_square_end_both.frameNStart = frameN  # exact frame index
        text_square_end_both.tStart = t  # local t and not account for scr refresh
        text_square_end_both.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_square_end_both, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_square_end_both.started')
        text_square_end_both.setAutoDraw(True)
    if text_square_end_both.status == STARTED:  # only update if drawing
        text_square_end_both.setText(square_end_text, log=False)
    
    # *text_14* updates
    if text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_14.frameNStart = frameN  # exact frame index
        text_14.tStart = t  # local t and not account for scr refresh
        text_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_14.started')
        text_14.setAutoDraw(True)
    
    # *text_accuracy_both* updates
    if text_accuracy_both.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_accuracy_both.frameNStart = frameN  # exact frame index
        text_accuracy_both.tStart = t  # local t and not account for scr refresh
        text_accuracy_both.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_accuracy_both, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_accuracy_both.started')
        text_accuracy_both.setAutoDraw(True)
    if text_accuracy_both.status == STARTED:  # only update if drawing
        text_accuracy_both.setText(accuracyText, log=False)
    
    # *text_less_acc* updates
    if text_less_acc.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_less_acc.frameNStart = frameN  # exact frame index
        text_less_acc.tStart = t  # local t and not account for scr refresh
        text_less_acc.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_less_acc, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_less_acc.started')
        text_less_acc.setAutoDraw(True)
    if text_less_acc.status == STARTED:  # only update if drawing
        text_less_acc.setText(text_if_less_accuracy, log=False)
    
    # *key_resp_11* updates
    waitOnFlip = False
    if key_resp_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_11.frameNStart = frameN  # exact frame index
        key_resp_11.tStart = t  # local t and not account for scr refresh
        key_resp_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_11, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_11.started')
        key_resp_11.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_11.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_11.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_11.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_11_allKeys.extend(theseKeys)
        if len(_key_resp_11_allKeys):
            key_resp_11.keys = _key_resp_11_allKeys[-1].name  # just the last key pressed
            key_resp_11.rt = _key_resp_11_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # *mouse_7* updates
    if mouse_7.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_7.frameNStart = frameN  # exact frame index
        mouse_7.tStart = t  # local t and not account for scr refresh
        mouse_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_7, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_7.started', t)
        mouse_7.status = STARTED
        mouse_7.mouseClock.reset()
        prevButtonState = mouse_7.getPressed()  # if button is down already this ISN'T a new click
    if mouse_7.status == STARTED:  # only update if started and not finished!
        buttons = mouse_7.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                x, y = mouse_7.getPos()
                mouse_7.x.append(x)
                mouse_7.y.append(y)
                buttons = mouse_7.getPressed()
                mouse_7.leftButton.append(buttons[0])
                mouse_7.midButton.append(buttons[1])
                mouse_7.rightButton.append(buttons[2])
                mouse_7.time.append(mouse_7.mouseClock.getTime())
                
                continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in both_endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "both_end" ---
for thisComponent in both_endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_11.keys in ['', [], None]:  # No response was made
    key_resp_11.keys = None
thisExp.addData('key_resp_11.keys',key_resp_11.keys)
if key_resp_11.keys != None:  # we had a response
    thisExp.addData('key_resp_11.rt', key_resp_11.rt)
thisExp.nextEntry()
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_7.x', mouse_7.x)
thisExp.addData('mouse_7.y', mouse_7.y)
thisExp.addData('mouse_7.leftButton', mouse_7.leftButton)
thisExp.addData('mouse_7.midButton', mouse_7.midButton)
thisExp.addData('mouse_7.rightButton', mouse_7.rightButton)
thisExp.addData('mouse_7.time', mouse_7.time)
thisExp.nextEntry()
# the Routine "both_end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "bye" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_bye.keys = []
key_resp_bye.rt = []
_key_resp_bye_allKeys = []
# keep track of which components have finished
byeComponents = [text_bye, key_resp_bye]
for thisComponent in byeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "bye" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_bye* updates
    if text_bye.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_bye.frameNStart = frameN  # exact frame index
        text_bye.tStart = t  # local t and not account for scr refresh
        text_bye.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_bye, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_bye.started')
        text_bye.setAutoDraw(True)
    
    # *key_resp_bye* updates
    waitOnFlip = False
    if key_resp_bye.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_bye.frameNStart = frameN  # exact frame index
        key_resp_bye.tStart = t  # local t and not account for scr refresh
        key_resp_bye.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_bye, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_bye.started')
        key_resp_bye.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_bye.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_bye.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_bye.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_bye.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_bye_allKeys.extend(theseKeys)
        if len(_key_resp_bye_allKeys):
            key_resp_bye.keys = _key_resp_bye_allKeys[-1].name  # just the last key pressed
            key_resp_bye.rt = _key_resp_bye_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in byeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "bye" ---
for thisComponent in byeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_bye.keys in ['', [], None]:  # No response was made
    key_resp_bye.keys = None
thisExp.addData('key_resp_bye.keys',key_resp_bye.keys)
if key_resp_bye.keys != None:  # we had a response
    thisExp.addData('key_resp_bye.rt', key_resp_bye.rt)
thisExp.nextEntry()
# the Routine "bye" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()

---
title: Windows 3.0 Solitaire Solver and Player
subtitle: A reverse engineering project that solves the classic Windows game, offerring a guided or automatic mode.
banner_href: '/projects/solitaire_banner.png'
demo_href: 'https://drive.google.com/file/d/1Ror7TavKlIZLE_ydvhQgeI_5ol6L9Wnf/view?usp=sharing'
---

## Problem

This project was part of a course I took in Spring 2022 on Computer Security.
During the course of this semester, we focused on a range of security concerns,
ranging from the classic buffer overflow exploits, to executable packing. For
the final project, we were given a range of topics to research, one of which
being reverse engineering. The task was to reverse engineer the Windows 3.0
binary for Solitaire, a popular card game included with the operating system,
and develop a program that could read the game's state from memory using what we
learned from our reverse engineering efforts, and play the game automatically
and win. The program should work for an unmodified copy of Solitaire, meaning
that modifying the binary itself would not be allowed.

## Approach

In planning this project, we recognized the project would include many distinct
components. We highlighted the following subtasks that would be required for
such a solver to exist:

1. Using reverse engineering tools, such as [IDA64](https://hex-rays.com/ida-pro/)
   and [OllyDBG](https://www.ollydbg.de/), we would need to research how the
   binary internally stores the state of its game.
2. Using either Windows API calls or libraries that make these calls, we would
   need to develop a method of reading the game's state programmatically and
   translate the raw data into a format that would be compatible with a solver
   algorithm for Solitaire.
3. We would need to research decision-making algorithms for Solitaire and
   develop our own that could solve the game within a reasonable amount of time.
4. As part of the project requirements, we also need to develop a GUI
   application that would guide the player through what moves would be needed to
   solve the game.

For the four project members of this group, we also would need to consider the
technology stack required as well. A language such as C would give us direct
access to the Windows API calls needed to reverse engineer, but the task of
creating a GUI application would become much more difficult. A language such as
JavaScript would make creating a GUI trivial using Electron, but we would lose
access to the ability to make C library calls. Ultimately, the best balance for
our purposes was Python, both because of the existing familiarity within our
group, and for the range of libraries available, including Windows API calls,
good selection of data structures in the standard library, and notably, a number
of GUI toolkits.

## Solution

With our subtasks identified and a natural delegation of tasks, here is the
following that was achieved with this project:

### Reverse Engineering and Reading Game State

In our reverse engineering efforts, we expected to find a specific byte location
in memory where the game's state was stored, and we could hardcode that specific
location to be read by our program, however, we quickly realized the
game's state was not always in the same location. Instead, we discovered
that before the game's state began, there was a specific byte pattern that always
appeared, and could not be found anywhere else in the game's memory. This is
likely some other data related to the game's state, but we could use it as a
reliable marker for the location in memory. Therefore, as a result, we knew to
look for the pattern, which always appeared 32 bytes before the start of the
game's state.

In order to programmatically read the game's state, we used the
[Pymem](https://github.com/srounet/Pymem), which is a series of tools to
manipulate Windows processes. Notably, this library allows us to read the game's
memory state when it launches, and search for a specific byte pattern. In doing
so, we could read the game's 52 cards in 12-byte segments. With some translation,
we could convert these 12 bytes into a format readable by a solver algorithm.

### Solver Algorithm

We already knew from prior experience that not every game of Solitaire is able
to be solved, and from research also confirmed that solving Solitaire is an
NP-Complete problem. Because of that, we would need to place a limit on how many
moves we would want to search for before giving up. Like a lot of decision
problems, we recognized that solving Solitaire closely resembled the structure
of many path-finding algorithms. Therefore, our group utilized a similar
strategy using a queue and recursive backtracking to find a solution.

Our algorithm analyzes its current state and loops over all of the possible
moves that could be made, peforms that move, then calls itself recursively.
After the recursion ends, if the solution was not found, the moves are undone and
we proceed to the next possible move.

### Solver GUI

The GUI toolkit of choice for this project was
[DearPyGUI](https://github.com/hoffstadt/DearPyGui), which is a Python binding
for the popular C++ toolkit named [Dear ImGui](https://github.com/ocornut/imgui).
Using some of the layout tools available, I created a window with cards laid
out in the same manner as the game. For each move produced by the solver, the
GUI will highlight the specific card in its current location in the game and
outline the spot that the card must be moved to. There are "Next" and "Previous"
buttons to allow the user to move through the move list.

In addition to a guided solver, we also were able to include a proof-of-concept
for an automatic solver. For this component, we would bypass the need for a GUI
solver algorithm, and have our software play the game directly. For this, we
utilized the [PyAutoGUI](https://github.com/asweigart/pyautogui) library. Our
initial plans were to use this library to perform mouse inputs to play the game,
however this proved to be quite complicated, as the exact locations to drag cards
to would vary on a number of different factors, including how many cards were in
the pile at the same time. We realized partway through development that the game
actually could be played solely using keyboard inputs, specifically the arrow
keys and the enter key. Because of that, we were able to develop a solving
algorithm that translates an arbitrary move provided by the solver algorithm into
keyboard inputs that would be needed to perform the move in the game. As a
result, the automatic solver can play the game much faster than a human would be
able to input the moves manually, essentially automating the entire process of
winning Solitaire.

## Conclusion

For this project to be done, there were a number of moving pieces that needed
to fit together in order for the software to function. This project tested many
aspects of our Computer Science education, from OS API calls, to algorithm
development, and even some UI design.

## Note

This project was completed for the purposes of a course in Computer Security,
therefore the source code cannot be distributed publicly.

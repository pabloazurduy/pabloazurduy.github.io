import bnlearn as bn
import pandas as pd
import itertools
import os
from tqdm import tqdm

# Define the DAG structure
DAG = bn.make_DAG([('F', 'A'), 
                   ('F', 'M'), 
                   ('A', 'M')])

output_file = "sim_out.txt"

for true_alarm, false_alarm, discarded_alarm in tqdm(itertools.product(range(1,11), range(1,51), range(1,51)), miniters=1, dynamic_ncols=True):
    D = pd.DataFrame([(1, 1, 1)] * true_alarm +   # True  Alarms 
                     [(0, 1, 1)] * false_alarm +  # False Alarms 
                     [(0, 1, 0)] * discarded_alarm,    # Discarded False Alarm
                     columns=['F', 'A', 'M'])
    DAG = bn.make_DAG([('F', 'A'), ('F', 'M'), ('A', 'M')], verbose=0)
    DAG = bn.parameter_learning.fit(DAG, D, methodtype='ml', verbose=0)
    q1 = bn.inference.fit(DAG, variables=['F'], evidence={'A':1, 'M':1}, verbose=0)
    output_str = f"{{ falseAlarm: {false_alarm}, trueAlarm: {true_alarm}, discardedAlarm: {discarded_alarm}, prob: {q1.values[1]} }},\n"
    with open(output_file, "a+") as f:
        f.write(output_str)

    

import csv
from worbliportal.database import session
from worbliportal.models import SnapshotBalance

balance_reader = csv.reader(open('snapshot-final.csv', newline=''), delimiter=',')
headers = next(balance_reader, None)
for row in balance_reader:
    creation_time = row[0]
    account_name = row[1]
    owner_key = row[2]
    active_key = row[3]
    total_nostake = row[4]
    staked = row[5]
    delegated = row[6]
    total = row[7]
    if account_name.startswith("eosio"):
    	continue
    if not total_nostake:
    	total_nostake = 0
    if not staked:
    	staked = 0
    if not delegated:
    	delegated = 0
    balance = SnapshotBalance(account_name=account_name, owner_key=owner_key, 
        active_key=active_key, total_nostake=total_nostake, staked=staked, 
        delegated=delegated, total=total, creation_time=creation_time)
    session.add(balance)
session.commit()
